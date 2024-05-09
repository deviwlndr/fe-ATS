import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./table.js";
let urlAPI = "https://ws-ats-02a71362d079.herokuapp.com/undangan";
get(urlAPI, GetAllRapatMakrab);
function GetAllRapatMakrab(results) {
    results.forEach(isiRow);
}
function isiRow(value) {
    let content = 
    isiTabel.replace("KEPADA", value.undangan_rapat.kepada)
            .replace("ALAMAT", value.alamat)
            .replace("UKM", value.ukm)
            .replace("#WARNA#", getRandomColor())
            .replace(/#WARNALOGO#/g, getRandomColorName());
        addInner("iniTabel", content);
}