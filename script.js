// Array of colors
const colors = ['#FF5733', '#33FF57', '#3357FF', 'F3FF33', '#F33A1'];

document.getElementById('colorButton').addEventListener('click',function() {
    // Generate a random index
    const randomIndex = Math.floor(Math.random() * colors.length);

    // Change the background color
    document.body.style.backgroundColor = colors[randomIndex];
})