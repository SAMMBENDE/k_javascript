function timeConvert(num) {
    var hours = Math.floor(num/3600);
    var reste = num-(heure*3600);
    var minutes = Math.floor(reste/60);
    reste = reste-(60*minutes);
    return hours + ':' + minutes + ':' + reste;
}