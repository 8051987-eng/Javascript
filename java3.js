const button = document.getElementById('c');
const colors = ['lightblue', 'green', 'yellow', 'blue', 'purple','violet','red']
const textElement = document.getElementById('c');
let currentIndex = 0;
    button.addEventListener('mouseenter', () => {

    textElement.style.color = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});


 
