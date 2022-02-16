const colors = ["#4cefdf", "#0a364c", "#f15025", "#c47909", "#ba9cb9", "#ba037d"];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', function(){
    const randomNumber = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})