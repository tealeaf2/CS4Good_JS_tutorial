const button = document.querySelector("button");
const colorBar = document.getElementById('colorBar');

button.addEventListener("click", (event) => {
    colorBar.style.background = getRandomColor();
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]; 
    }
    return color;
  }