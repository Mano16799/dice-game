window.onload=function(){
    var random1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    var random2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    document.getElementById("img1").setAttribute("src","images/dice"+random1+".png")
    document.getElementById("img2").setAttribute("src","images/dice"+random2+".png")
}

function play(){
    var random1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    var random2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    document.getElementById("img1").setAttribute("src","images/dice"+random1+".png")
    document.getElementById("img2").setAttribute("src","images/dice"+random2+".png")

    if(random1>random2){
        document.getElementById("title").innerText = "Player 1 wins"
    }
    else if(random2>random1){
        document.getElementById("title").innerText = "Player 2 wins"
    }
    else{
        document.getElementById("title").innerText = "Draw"
    }
}