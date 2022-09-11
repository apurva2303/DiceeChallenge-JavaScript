// document.querySelector("h1").style.color="yellow"
let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let randomNumber2 = Math.floor(Math.random() * 6) + 1;

let img1src = "images/dice" + randomNumber1 + ".png";
let img2src = "images/dice" + randomNumber2 + ".png";

let result = "";

if (randomNumber1 > randomNumber2)
{
    result = "🚩Player 1 wins!"
    document.querySelector("h1").innerHTML = result;
}
else if (randomNumber1 < randomNumber2)
{
    result = "Player 2 wins!🚩"
    document.querySelector("h1").innerHTML = result;
}
else
{
    result = "Draw!"
    document.querySelector("h1").innerHTML = result;
}
     

document.querySelector(".img1").setAttribute("src", img1src);
document.querySelector(".img2").setAttribute("src", img2src);