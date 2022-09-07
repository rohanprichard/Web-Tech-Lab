function change(){
    var div=document.getElementById('box');
    var text = document.getElementById('text')

    var bg = document.getElementById('bgcolor').value;
    var txtcolor = document.getElementById('txtcolor').value;
    var txtsize = document.getElementById('txts').value;
    var width = document.getElementById('width').value;
    var height = document.getElementById('height').value;
    var slide = document.getElementById('bord').value;

    div.style.backgroundColor = bg;
    text.style.color = txtcolor
    text.style.fontSize = txtsize + "px";
    div.style.width = width + "px";
    div.style.height = height + "px";
    div.style.borderWidth = slide + "px";
}

var timer = null;

function start(){
    clearTimeout(timer)
    timer=setInterval(move,10)
}

function init(){
    var car = document.getElementById('car');
    car.style.position = 'relative';
    car.style.left='2px';
}

function move(){
    console.log(car.style.left)
    if (parseInt(car.style.left) >= 1080){
        stop()
        danger()
    }
    car.style.left=parseInt(car.style.left)+2+"px";
}

function stop(){
    clearTimeout(timer);
}

function danger(){
    div = document.getElementById('danger')
    div.backgroundColor = 'blue';
}

function store() {
    let n = []
    let num = []
    let nin = document.getElementById().value
    let numin = document.getElementById().value
}