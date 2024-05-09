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