import calendar
import json
import random
import sqlite3
import time
from datetime import datetime
from sqlite3 import connect

import keras.models
import pandas as pd
import schedule
from flask import Flask, request, jsonify, url_for
from flask_sqlalchemy import SQLAlchemy

from datacollection.collect import getDataForSymbol, getStockInfo
from bitty import predict_class, get_response
from newslettermailer import sendCode, bulkSend
from flask_bcrypt import Bcrypt
# from datacollection.fetcher import fetch_new_data

app = Flask(__name__)
bcrypt = Bcrypt(app)
app.config["SQLALCHEMY_DATABASE_URI"] = 'sqlite:///ubase.db'
app.config['SECRET_KEY'] = 'dzipopetagata'
db = SQLAlchemy()


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    surname = db.Column(db.String(50), nullable=False)
    email = db.Column(db.String(50), nullable=False, unique=True)
    code = db.Column(db.String(50), nullable=False)
    auth = db.Column(db.String(2), nullable=False)


db.init_app(app)
with app.app_context():
    db.create_all()

conn = connect('datacollection/symbolb.db')
cursor = conn.cursor()

cursor.execute("SELECT sym FROM symbase;")
symbolsL = [symbolsL[0] for symbolsL in cursor.fetchall()]

cursor.execute("SELECT sym FROM tickbase;")
tickers = [tickers[0] for tickers in cursor.fetchall()]

# schedule.every(1).hours.do(retrieveNews)
schedule.every(24).hours.do(bulkSend)
# schedule.every(24).hours.do(fetch_new_data)

model = keras.models.load_model("bitty.h5")

@app.route('/update', methods=['POST', 'GET'])
def update():

    # for sym in symbolsL:
    #     getDataForSymbol(sym)
    # #
    # for ticker in tickers:
    #     getStockInfo(ticker)

    print(schedule.get_jobs())
    schedule.run_pending()
    response = jsonify("updated")
    response.status_code = 200
    return response

@app.route("/news", methods=['POST', 'GET'])
def news():
    connection = connect('datacollection/newslist.db')
    curs = connection.cursor()

    curs.execute("SELECT title, link FROM newstable")
    res = curs.fetchall()

    df = pd.DataFrame(res, columns=["title", "link"])
    jsonce = df.to_json(orient="records")
    jsonce = jsonce.replace(r'\\', "")
    resp = jsonify(jsonce)
    resp.status_code = 200
    connection.close()
    return resp


@app.route("/n/<category>", methods=['POST', 'GET'])
def news_cat(category):
    connection = connect('datacollection/newslist.db')
    curs = connection.cursor()

    # change link to title
    current_GMT = time.gmtime()
    currentdate = calendar.timegm(current_GMT)

    curs.execute(
        "SELECT time, title, link, category, img, text FROM newstable WHERE category = '" + category + "' AND link LIKE '%coindesk%'")
    res = curs.fetchall()

    df = pd.DataFrame(res, columns=["time", "title", "link", "category", "img", "text"])
    jsonce = df.to_json(orient="records")
    jsonce = jsonce.replace(r'\\', "")
    resp = jsonify(jsonce)
    resp.status_code = 200
    connection.close()
    return resp


@app.route("/news/<keyword>", methods=['POST', 'GET'])
def news_search(keyword):
    connection = connect('datacollection/newslist.db')
    curs = connection.cursor()

    # change link to title
    current_GMT = time.gmtime()
    currentdate = calendar.timegm(current_GMT)

    curs.execute("SELECT time, title, link, category, img, text FROM newstable WHERE link LIKE '%" + keyword + "%'")
    res = curs.fetchall()

    df = pd.DataFrame(res, columns=["time", "title", "link", "category", "img", "text"])
    jsonce = df.to_json(orient="records")
    jsonce = jsonce.replace(r'\\', "")
    resp = jsonify(jsonce)
    resp.status_code = 200
    connection.close()
    return resp

@app.route("/newssearch", methods=['POST', 'GET'])
def newssearch():
    data = request.get_json()
    keyword = data['searchv']
    connection = connect('datacollection/newslist.db')
    curs = connection.cursor()

    # change link to title
    current_GMT = time.gmtime()
    currentdate = calendar.timegm(current_GMT)

    curs.execute("SELECT time, title, link, category, img, text FROM newstable WHERE title LIKE '%" + keyword + "%' AND link LIKE '%coindesk%'")
    res = curs.fetchall()

    df = pd.DataFrame(res, columns=["time", "title", "link", "category", "img", "text"])
    jsonce = df.to_json(orient="records")
    jsonce = jsonce.replace(r'\\', "")
    resp = jsonify(jsonce)
    resp.status_code = 200
    connection.close()
    return resp


@app.route("/price/<symbol>", methods=['POST', 'GET'])
def send(symbol):
    connection = connect('datacollection/symbolsprices.db')
    connection.row_factory = sqlite3.Row
    curs = connection.cursor()

    res = curs.execute("SELECT time, close FROM " + symbol)

    df = pd.DataFrame(res, columns=["time", "close"])
    jsonce = df.to_json(orient="records")
    resp = jsonify(jsonce)
    resp.status_code = 200
    return resp


@app.route("/price/<symbol>/<ts>", methods=['POST', 'GET'])
def sendts(symbol, ts):
    connection = connect('datacollection/symbolsprices.db')
    connection.row_factory = sqlite3.Row
    curs = connection.cursor()

    current_gmt = time.gmtime()
    minusdate = calendar.timegm(current_gmt)

    if ts == "w":
        minusdate -= 8 * 86400
    elif ts == "m":
        minusdate -= 31 * 86400
    elif ts == "y":
        minusdate -= 366 * 86400
    elif ts == "5y":
        minusdate -= 5 * 366 * 86400
    elif ts == "ld":
        minusdate -= 2 * 86400

    mindate = datetime.fromtimestamp(minusdate).isoformat()
    res = curs.execute("SELECT time, close FROM " + symbol + " WHERE time >= '" + mindate + "'")

    df = pd.DataFrame(res, columns=["time", "close"])
    jsonce = df.to_json(orient="records")
    resp = jsonify(jsonce)
    resp.status_code = 200
    return resp


@app.route("/subscribe", methods=['POST', 'GET'])
def register():
    data = request.get_json()
    name = data['name']
    surname = data['surname']
    email = data['email']

    print(data)

    existing_email = User.query.filter_by(email=email).first()
    if existing_email:
        rus = jsonify("Email taken")
        rus.status_code = 410
        return rus

    new_code = random.randint(100000, 999999)

    new_user = User(name=name, surname=surname, email=email, code=str(new_code), auth=str(0))
    db.session.add(new_user)
    db.session.commit()

    sendCode(email, new_code)
    response = jsonify({"email": email, "code": new_code})
    response.status_code = 200
    return response


@app.route('/symbols', methods=['GET', 'POST'])
def symbols():
    sconnection = connect('datacollection/symbolb.db')
    conncurs = sconnection.cursor()

    conncurs.execute("SELECT sym,name from symbase")
    symres = conncurs.fetchall()
    df = pd.DataFrame(symres, columns=['sym', 'name'])

    conncurs.execute("SELECT sym,name from tickbase")
    tickres = conncurs.fetchall()
    df2 = pd.DataFrame(tickres, columns=['sym', 'name'])

    final = pd.concat([df, df2])

    final_df = final.sort_values(by=['name'], ascending=True)

    jsonce = final_df.to_json(orient='records')
    response = jsonify(jsonce)
    response.status_code = 200
    return response


@app.route("/code/<email>", methods=['POST', 'GET'])
def code(email):
    data = request.get_json()
    coded = data['code']

    user = User.query.filter_by(email=email).first()
    if coded == user.code:
        user.auth = 1
        db.session.commit()

    else:
        response = jsonify("wrong code")
        response.status_code = 403
        return response

    response = jsonify("all good")
    response.status_code = 200
    return response


@app.route("/bot", methods=['POST', 'GET'])
def sendmsg():
    data = request.get_json()
    message = data['message']

    ints = predict_class(model, message)
    intents = json.loads(open("intents.json").read())
    try:
        res = get_response(model, ints, intents)
    except:
        res = "I can't assist you with that request."
    finally:
        response = jsonify(res)
        response.status_code = 200
        return response


if __name__ == '__main__':
    app.run()
    with app.test_request_context():
        for sym in symbolsL:
            url_sym = url_for('send', symbol=sym)
            url_sym_date = url_for('sendts', symbol=sym, ts="")
        for tick in tickers:
            url_sym = url_for('send', symbol=tick)
            url_sym_date = url_for('sendts', symbol=tick, ts="")

        url_news = url_for('news_search', keyword="")
