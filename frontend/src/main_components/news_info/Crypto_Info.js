let str;
await fetch("/n/Crypto").then((res) => res.text())
    .then((text) => {
        str = JSON.parse(text);
    });

export const CryptoData = JSON.parse(str);
