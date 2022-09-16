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
    danger()
}

function move(){
    console.log(car.style.left)
    if (parseInt(car.style.left) >= 1080){
        danger()
        stop()
    }
    car.style.left=parseInt(car.style.left)+2+"px";
}

function stop(){
    clearTimeout(timer);
}

function danger(){
    x = document.getElementById('pop');
    if (x.style.display === "none") {
       x.style.display = "block";
      } else {
        x.style.display = "none";
      }
}

