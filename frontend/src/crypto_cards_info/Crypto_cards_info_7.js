import {SymbolsData} from "./Symbols";

export const id = Math.floor(Math.random() * 70);
let sym = SymbolsData[id].sym;
let val;
await fetch("/price/" + sym + "/m").then((res) => res.text())
    .then((text) => {
        val = JSON.parse(text);
    });
export const CryptoData_7 = JSON.parse(val);
