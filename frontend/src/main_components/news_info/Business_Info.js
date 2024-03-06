let str;
await fetch("/n/Business").then((res) => res.text())
    .then((text) => {
        str = JSON.parse(text);
    });

export const BusinessData = JSON.parse(str);
