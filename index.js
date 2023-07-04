function rollTheDice() {
    let randomNum1 = Math.floor(Math.random() * 6) + 1;
    let randomNum2 = Math.floor(Math.random() * 6) + 1;
    
    let randomImg1 = "dice" + randomNum1 + ".png";
    let randomImg2 = "dice" + randomNum2 + ".png"
    
    let randomSrc1 = "images/" + randomImg1;
    let randomSrc2 = "images/" + randomImg2;
    
    document.querySelectorAll("img")[0].setAttribute("src", randomSrc1);
    document.querySelectorAll("img")[1].setAttribute("src", randomSrc2);
    
    if (randomNum1 > randomNum2) {
        document.querySelector("h1").textContent = "🚩 Shaheb Won";
    } else if (randomNum1 < randomNum2) {
        document.querySelector("h1").textContent = "Bibijaan Won 🚩";
    } else {
        document.querySelector("h1").textContent = "🚩 Draw 🚩";
    }
}
