import requests
from bs4 import BeautifulSoup
import pandas as pd
import time, calendar

from sqlite3 import connect

news_list = []


#
# init_query = 'CREATE TABLE IF NOT EXISTS newstable (time TIMESTAMP, title VARCHAR(100), link VARCHAR(100));'
#
# cursor = connection.cursor()
# cursor.execute(init_query)
# connection.commit()


def retrieveNews():
    print("Function call!")
    connection = connect('datacollection/newslist.db')
    dbdone = pd.read_sql('SELECT * FROM newstable', connection)
    current_GMT = time.gmtime()
    currentdate = calendar.timegm(current_GMT)

    # TODO: Scrape
    urls = {"https://finance.yahoo.com/topic/stock-market-news/",
            "https://finance.yahoo.com/topic/yahoo-finance-originals",
            "https://finance.yahoo.com/topic/earnings", "https://finance.yahoo.com/live/politics/",
            "https://finance.yahoo.com/topic/economic-news", "https://finance.yahoo.com/topic/crypto/"}
    for url in urls:
        response = requests.get(url)
        soup = BeautifulSoup(response.text, 'html.parser')

        articles = soup.find_all("li", class_="js-stream-content")

        for a in articles:
            news_items = a.find('h3', class_='Mb(5px)')
            if news_items:
                news_title = news_items.text.strip()
                news_link = news_items.a['href']

                image = a.find("img")
                image_url = 'no img'
                if image:
                    image_url = image["src"]

                news_list.append(
                    {'time': currentdate, 'title': news_title, 'link': "https://finance.yahoo.com/news" + news_link,
                     'category': "Business", 'img': image_url, 'text': "no text"})

    # TODO: Scraping images is not allowed
    url_nyt = {"https://www.nytimes.com/section/business", "https://www.nytimes.com/section/business/dealbook",
               "https://www.nytimes.com/section/business/economy",
               "https://www.nytimes.com/section/business/energy-environment",
               "https://www.nytimes.com/section/business/media",
               "https://www.nytimes.com/section/business/small-business", "https://www.nytimes.com/section/your-money",
               "https://www.nytimes.com/section/automobiles"}
    for url_n in url_nyt:
        response = requests.get(url_n)
        soup = BeautifulSoup(response.content, "html.parser")

        headlines = soup.find_all("a", class_="css-8hzhxf")

        for link in headlines:
            news_list.append(
                {'time': currentdate, 'title': link.get_text(), 'link': "https://www.nytimes.com" + link['href'],
                 'category': "Business", 'img': "no img", 'text': "no text"})

    # TODO: Scrape
    url_ft = {"https://www.ft.com/companies", "https://www.ft.com/technology/", "https://www.ft.com/financials",
              "https://www.ft.com/health", "https://www.ft.com/industrials", "https://www.ft.com/media",
              "https://www.ft.com/cryptofinance", "https://www.ft.com/currencies"}
    for url_f in url_ft:
        response = requests.get(url_f)
        soup = BeautifulSoup(response.content, "html.parser")

        cat = "Business"
        if url_f.__contains__("technology"):
            cat = "Tech"
        elif url_f.__contains__("cryptofinance") or url_f.__contains__("cryptofinance"):
            cat = "Crypto"

        articles = soup.find_all("li", class_="o-teaser-collection__item o-grid-row")
        for a in articles:
            headlines = a.find("a", class_="js-teaser-heading-link")
            if headlines:
                image = a.find("img")
                img_link = 'no img'
                if image:
                    img_link = image['data-src']

                news_list.append(
                    {'time': currentdate, 'title': headlines.text, 'link': "https://www.ft.com" + headlines['href'],
                     'category': cat, 'img': img_link, 'text': "no text"})

    # TODO: Images can't be scraped
    url_verge = "https://www.theverge.com/tech/"
    response = requests.get(url_verge)
    soup = BeautifulSoup(response.content, "html.parser")

    headlines = soup.find_all("a",
                              class_="after:absolute after:inset-0 group-hover:shadow-underline-blurple dark:group-hover:shadow-underline-franklin")  # WSJTheme--headline--unZqjb45 reset

    for link in headlines:
        news_list.append(
            {'time': currentdate, 'title': link.get_text(), 'link': "https://www.theverge.com" + link['href'],
             'category': "Tech", 'img': "no img", 'text': "no text"})

    # TODO: Scraped
    urlscd = {"https://www.coindesk.com/tag/news/",
              "https://www.coindesk.com/tag/on-chain-data/", "https://www.coindesk.com/tag/on-chain-data/2/", "https://www.coindesk.com/tag/on-chain-data/3/"
              "https://www.coindesk.com/tag/token-governance/", "https://www.coindesk.com/tag/token-governance/2/", "https://www.coindesk.com/tag/token-governance/3/",
              "https://www.coindesk.com/tag/bitcoin/", "https://www.coindesk.com/tag/bitcoin/2/", "https://www.coindesk.com/tag/bitcoin/3/",
              "https://www.coindesk.com/tag/ether/", "https://www.coindesk.com/tag/ether/2/", "https://www.coindesk.com/tag/ether/3/",
              "https://www.coindesk.com/tag/first-mover/", "https://www.coindesk.com/tag/first-mover/2/",
              "https://www.coindesk.com/tag/business/", "https://www.coindesk.com/tag/business/2/", "https://www.coindesk.com/tag/business/3/",
              "https://www.coindesk.com/tag/bankruptcy/", "https://www.coindesk.com/tag/bankruptcy/2/", "https://www.coindesk.com/tag/bankruptcy/3/",
              "https://www.coindesk.com/tag/sec/", "https://www.coindesk.com/tag/sec/2/", "https://www.coindesk.com/tag/sec/3/",
              "https://www.coindesk.com/tag/defi/",
              "https://www.coindesk.com/tag/blockchains/",
              "https://www.coindesk.com/tag/hacks/"}
    for urlsc in urlscd:
        responsecd = requests.get(urlsc)
        soup = BeautifulSoup(responsecd.content, 'html.parser')

        articles = soup.find_all("div",
                                 class_='article-cardstyles__StyledWrapper-sc-q1x8lc-0 eJFoEa article-card default')

        cat = 'Business'
        if urlsc.__contains__("on-chain-data") or urlsc.__contains__("token") or urlsc.__contains__(
                "bitcoin") or urlsc.__contains__("ether"):
            cat = 'Crypto'
        elif urlsc.__contains__("bankruptcy") or urlsc.__contains__("sec"):
            cat = 'Policy'
        elif urlsc.__contains__("defi") or urlsc.__contains__("blockchain") or urlsc.__contains__("hacks"):
            cat = 'Tech'

        for a in articles:
            title = a.find("h6", class_="typography__StyledTypography-sc-owin6q-0 diMXjy").text
            link = a.find("a", class_="card-title")['href']
            content_text = a.find("span", class_="content-text").text
            content_text = content_text[:100]
            img = a.find("img")
            img_link = 'no img'
            if img:
                img_link = img['src']

            news_list.append(
                {'time': currentdate, 'title': title, 'link': "https://www.coindesk.com" + link,
                 'category': cat, 'img': img_link, 'text': content_text})

    frame = pd.DataFrame(news_list)
    final = pd.concat([dbdone, frame])
    final.drop_duplicates(subset=['title'], inplace=True)

    final.to_sql('newstable', connection, if_exists="replace", index=False)
    connection.close()

# retrieveNews()
