from sqlite3 import connect

import pandas as pd
from Historic_Crypto import HistoricalData

from datetime import datetime
from yahoo_fin.stock_info import get_data

conn = connect('datacollection/symbolb.db')
curs = conn.cursor()

curs.execute("SELECT sym FROM symbase;")

symbols = [symbols[0] for symbols in curs.fetchall()]

curs.execute("SELECT sym FROM tickbase;")

tickers = [tickers[0] for tickers in curs.fetchall()]

print(symbols[207:])
print(tickers)


def getDataForSymbol(symbol):
    current_date = datetime.now()
    new = HistoricalData(symbol + '-USD', 86400, '2018-01-01-00-00').retrieve_data()

    connection = connect('datacollection/symbolsprices.db')
    curs1 = connection.cursor()

    query = 'CREATE TABLE IF NOT EXISTS ' + symbol + ' (time timestamp, close FLOAT);'

    curs1.execute(query)
    connection.commit()

    new = new.drop(columns=['open', 'low', 'high', 'volume'])

    new.to_sql(symbol, connection, if_exists='replace', index=True)
    print("Created table for symbol:", symbol)


def getStockInfo(ticker):
    print("Getting data for ticker:", ticker)
    dailydata = get_data(ticker, start_date="01/01/2018", end_date=None, index_as_date=False, interval="1d")
    connection = connect('datacollection/symbolsprices.db')
    curs1 = connection.cursor()

    dailydata.columns = dailydata.columns.str.replace("date", "time")
    dailydata = dailydata.drop(columns=['open', 'high', 'low', 'adjclose', 'volume', 'ticker'])

    query = 'CREATE TABLE IF NOT EXISTS ' + ticker + ' (time timestamp, close FLOAT);'

    curs1.execute(query)
    connection.commit()

    dailydata.to_sql(ticker, connection, if_exists='replace', index=True)