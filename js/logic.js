// Cards Wiggle Animation
var cards = document.querySelectorAll(".card"), i;

for (i = 0; i < cards.length; i++) {
  wiggle(cards[i])
  
};

function wiggle (card){
  card.addEventListener('mousemove', function (e) {
    var wh = window.innerHeight / 2,
    //ww = window.innerWidth / 2,
    offX = this.offsetLeft,
    //offY = this.offsetTop
    offW = this.offsetWidth/2;
    this.style.setProperty('--mouseX', (e.clientX - offX - offW) / 25);
    this.style.setProperty('--mouseY', (e.clientY - wh) / 25);
  
  });

card.addEventListener('mouseleave', function (e) {

  this.style.setProperty('--mouseX', 0);
  this.style.setProperty('--mouseY', 0);

});
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
  var x = document.getElementById("mobileNav");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

