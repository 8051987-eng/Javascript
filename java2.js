const buttons = document.getElementById('d')
const numbers = ['3', '5', '3', '1']
let currentIndexs = 0;
    buttons.addEventListener('click', () => {

        alert(numbers[currentIndexs]);

currentIndexs = (currentIndexs + 1) % numbers.length;
    });    

document.getElementById("H").addEventListener("click", () => {
    window.scrollBy({
            top: 600,
            behavior: 'smooth'
        });
    });

document.getElementById("b").addEventListener("click", () => {
    alert("WOA WOA WOA ARE YOU SUREEE YOU WANT TO CLICK THI BUTTON")

    window.location.href = 'oh.html';
});
 
