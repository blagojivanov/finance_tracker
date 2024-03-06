from datetime import datetime
from yahoo_fin.stock_info import get_data
from Historic_Crypto import HistoricalData
from sqlite3 import connect
import pandas as pd
import schedule
from collect import tickers, symbols

def fetch_new_data():
    connection = connect('datacollection/symbolsprices.db')

    current_date = datetime.now()

    for tick in tickers:
        print("Getting data for ticker: " + tick)
        string_y = current_date.strftime("%Y")
        string_mo = current_date.strftime("%m/")
        string_d = current_date.strftime("%d/")
        dailydata = get_data(tick, start_date=string_d + string_mo + string_y, end_date=None, index_as_date=True, interval="1d")
        dailydata = dailydata.drop(columns=['open', 'high', 'low', 'adjclose', 'volume'])
        dailydata.to_sql(tick, connection, if_exists='append', index=True)
        print("Added data for ticker: " + tick)

    for sym in symbols:
        print("Getting data for symbol: " + sym)
        string_y = current_date.strftime("%Y-")
        string_mo = current_date.strftime("%m-")
        string_d = current_date.strftime("%d-")
        string_h = current_date.strftime("%H-")
        string_mi = current_date.strftime("%M")
        new = HistoricalData(sym + '-USD', 1, string_y + string_mo + string_d + string_h + string_mi).retrieve_data()
        new = new.drop(columns=['open', 'low', 'high', 'volume'])
        new.to_sql(sym, connection, if_exists='append', index=True)
