var i = 0;
var txt = 'springraphy';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("hero").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}