let str;
await fetch("/n/Tech").then((res) => res.text())
    .then((text) => {
        str = JSON.parse(text);
    });

export const TechData = JSON.parse(str);
