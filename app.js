var a = document.getElementById("setHours");
var b = document.getElementById("setMins");
var c = document.getElementById("setSec");
var d = "";

var hours = document.getElementById("hours");
var mins = document.getElementById("min");
var seconds = document.getElementById("sec");
var interval;
console.log(setHours);


function setT() {

    hours.innerHTML = a.value;
    mins.innerHTML = b.value;
    seconds.innerHTML = c.value;
    document.getElementById('div-input').className = 'hid';
    document.getElementById('time').className = 'timer'

}


function time() {
    c.value--
    seconds.innerHTML = c.value;

    if (c.value == 0) {
        b.value--;
        mins.innerHTML = b.value;
        c.value = 60;
    } else if (b.value == 0) {
        a.value--
        hours.innerHTML = a.value
        b.value = 60;
    }

}




function start() {
    interval = setInterval(time, 1000)
    document.getElementById('strt-btn').style.display = 'none';
}




function pause() {
    clearInterval(interval);
    document.getElementById('strt-btn').style.display = '';
    document.getElementById('ssr-btn').style.marginLeft = ''

}

function reset() {
    pause()
    hours.innerHTML = 0
    mins.innerHTML = 0
    seconds.innerHTML = 0
    document.getElementById('div-input').className = 'data';
    document.getElementById("time").className = 'hid'
    a.value = ''
    b.value = ''
    c.value = ''
}