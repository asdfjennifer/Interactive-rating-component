// @import "../css/style.scss";

console.log("Kadi stinkt");

let one = document.getElementById('one_input');
let two = document.getElementById('two_input');
let three = document.getElementById('three_input');
let four = document.getElementById('four_input');
let five = document.getElementById('five_input');


let button = document.getElementById('one');

let clickedButton = (button) => {
    // btn1.style.backgroundColor = "gray";
    // btn2.style.backgroundColor.classList;
    // add("myStyle");
    // let div = document.getElementById;
    // div.classList.add('myStyle');
    // document.getElementById.classList;
    // document.getElementById.add("myStyle");
    switch (button) {
        case one: {
            console.log("1 wurde geklickt");
            // one_input.style.backgroundColor = "gray";
            one_input.classList.add("myStyle");
            two_input.classList.remove("myStyle");
            three_input.classList.remove("myStyle");
            four_input.classList.remove("myStyle");
            five_input.classList.remove("myStyle");
            break;
        }
        case two: {
            console.log("2 wurde geklickt");
            one_input.classList.remove("myStyle");
            two_input.classList.add("myStyle");
            three_input.classList.remove("myStyle");
            four_input.classList.remove("myStyle");
            five_input.classList.remove("myStyle");
            break;
        }
        case three: {
            console.log("3 wurde geklickt");
            one_input.classList.remove("myStyle");
            two_input.classList.remove("myStyle");
            three_input.classList.add("myStyle");
            four_input.classList.remove("myStyle");
            five_input.classList.remove("myStyle");
            break;
        }
        case four: {
            console.log("4 wurde geklickt");
            one_input.classList.remove("myStyle");
            two_input.classList.remove("myStyle");
            three_input.classList.remove("myStyle");
            four_input.classList.add("myStyle");
            five_input.classList.remove("myStyle");
            break;
        }
        case five: {
            console.log("5 wurde geklickt");
            one_input.classList.remove("myStyle");
            two_input.classList.remove("myStyle");
            three_input.classList.remove("myStyle");
            four_input.classList.remove("myStyle");
            five_input.classList.add("myStyle");
        }
    }
};

function clickedSubmit() {
    console.log("clicked Submit button");
}

var openThankyouId = document.querySelector('#openThankyouId');

openThankyouId.addEventListener('click', function (e) {
    e.preventDefault();
    // Hide first view
    document.getElementById('my_form').style.display = 'none';

    // Show thank you message element
    document.getElementById('thank_you_form').style.display = 'block';
});