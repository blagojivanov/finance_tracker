let str;
await fetch("/n/Policy").then((res) => res.text())
    .then((text) => {
        str = JSON.parse(text);
    });

export const PolicyData = JSON.parse(str);
