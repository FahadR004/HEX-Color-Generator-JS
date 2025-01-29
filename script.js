const button = document.getElementById("generate-button");
const colorBox = document.getElementById("color-box");
const colorText = document.getElementById("color-text");

button.addEventListener("click", updateColor);

function getRandomColor() {
    const letters = "0123456789ABCDE";
    let color = "#";
    const min = 0;
    const max = letters.length - 1;

    for (let i=0; i< 6; i++) {
        color += letters[Math.floor(Math.random()*(max-min+1))+min];
        console.log(color);
    }  

    return color;
}


function updateColor() {
    const colorBox = document.getElementById("color-box");
    const colorText = document.getElementById("color-text");
    const body = document.querySelector("body");

    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
    colorText.textContent = randomColor;

    // body.style.background = "none";
    // body.style.backgroundColor = `${randomColor}`;

}
