import { get } from "https://bukulapak.github.io/api/process.js";
import { addInner } from "https://bukulapak.github.io/element/process.js";
import { getRandomColor, getRandomColorName } from "https://bukulapak.github.io/image/process.js";
import { isiTabel } from "./temp/table.js";
let urlAPI = "https://ws-ats-02a71362d079.herokuapp.com/undangan";
get(urlAPI, GetAllRapatMakrab);
