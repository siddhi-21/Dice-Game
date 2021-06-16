var image = ["img/dice1.png","img/dice2.png","img/dice3.png","img/dice4.png","img/dice5.png","img/dice6.png"];
var randomNumber1 = Math.floor(Math.random() * 6);
var firstImage = image[randomNumber1];
document.querySelector(".img1").setAttribute("src", firstImage);
var randomNumber2 = Math.floor(Math.random() * 6);
var secondImage= image[randomNumber2];
document.querySelector(".img2").setAttribute("src", secondImage);

if(randomNumber1 > randomNumber2){
	document.querySelector("h1").textContent="⛳Player One Wins!";

}
else if(randomNumber2 > randomNumber1){
	document.querySelector("h1").textContent="Player Second Wins!⛳";

}
else{
	if(randomNumber1===randomNumber2){
		document.querySelector("h1").textContent="Draw!";
	}
}
