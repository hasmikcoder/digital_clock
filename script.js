function currentTime() {

var date = new Date();      /* creating object of Date class */
var hours = date.getHours();
var minutes =date.getMinutes();
var seconds = date.getSeconds();

var am_or_pm = document.getElementById('am_or_pm'); 

if (hours >= 12) {

    am_or_pm.innerHTML ="PM";
}
else {

    am_or_pm.innerHTML ="AM";
}

//when hours are in 12 to 24
 if (hours > 12) {
     hours = hours -12;
 }

document.getElementById('hours').innerHTML = hours;
document.getElementById('minutes').innerHTML = minutes;
document.getElementById('seconds').innerHTML = seconds;

}

//1000 for 1 second
setInterval (currentTime, 1000);
