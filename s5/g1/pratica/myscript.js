var dataAttuale = new Date();
document.getElementById('dataodierna').innerHTML = 'Data esatta: ' + dataAttuale;

var anno = dataAttuale.getFullYear();
document.getElementById('anno').innerHTML = 'Siamo nel: ' + anno;

var giorno = dataAttuale.getDate();
document.getElementById('giorno').innerHTML = 'Oggi è il: ' + giorno;

var europea = dataAttuale.toLocaleString();
document.getElementById('dataeurope').innerHTML = 'Data europea: ' + europea;

window.onload = setInterval(Orologio,1000);
  function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
  }
  function Orologio()
  {
    var d = new Date();
    var date = d.getDate();
    var ora = addZero(d.getHours());
    var min = addZero(d.getMinutes());
    var sec = addZero(d.getSeconds());
    document.getElementById("orologio").innerHTML=date+"|"+ora+":"+min+":"+sec;
  }
