
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImage1 = "images/dice"+randomNumber1+".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImage1);

var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImage2 = "images/dice"+randomNumber2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
   var player1 =  document.getElementById("hehe");
   player1.innerHTML="🚩 Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    var player2 =  document.getElementById("hehe");
    player2.innerHTML="Player 2 Wins 🚩";
}
else{
    var draw = document.getElementById("hehe");
    draw.innerHTML="Draw!!!";
}