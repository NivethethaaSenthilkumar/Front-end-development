document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('colorButton');
    
    button.addEventListener('click', () => {
        // Array of colors to choose from
        const colors = ['#FF5733', '#33FF57', '#3357FF', '#F333FF', '#FF33A6'];
        
        // Select a random color from the array
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Change the background color of the body
        document.body.style.backgroundColor = randomColor;
    });
});
