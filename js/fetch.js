import { get } from "https://bukulapak.github.io/api/process.js"; 
let urlAPI = "https://ws-ats-02a71362d079.herokuapp.com/undangan";
get(urlAPI,isiTablePresensi);
function isiTablePresensi(results){
    console.log(results);
}