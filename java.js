document.getElementById("e").addEventListener("click", () => {
    alert("bro becareful are you sure you want to go there its VERY DANGEROUS CLick ok not scamming you");

     window.location.href = 'ohno.html';
});
document.getElementById("myButton").addEventListener("click", () => {
    alert("You clicked the button!");
});

document.getElementById("r").addEventListener("click", () => {
    alert("This is my first time using javascript so dont be mad if their is just random stuff");
});

const button = document.getElementById('w');
const colors = ['lightblue', 'green', 'yellow', 'blue', 'purple','violet','red']
let currentIndex = 0;
    button.addEventListener('click', () => {

    document.body.style.backgroundColor =  colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length;
});

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
