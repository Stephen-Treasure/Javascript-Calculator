// let input = document.getElementById("input");

// const calc = (num) => {
//     input.value += num;
// };
// let btns = Array.from(document.querySelectorAll(".btn"));
// console.log(btns);

// btns.map((btn) => {
//     btn.addEventListener("click", (event) => {
//         event.preventDefault();
//         if (event.target.innerText == "C") {
//             input.value = "";
//         } else if (event.target.innerText) {
//             input.value += event.target.innerText;
//         }
//         console.log(event.target.innerText);
//     });
// });

//numbers
let decimal = document.getElementById(".");
let zero = document.getElementById("0");
let one = document.getElementById("1");
let two = document.getElementById("2");
let three = document.getElementById("3");
let four = document.getElementById("4");
let five = document.getElementById("5");
let six = document.getElementById("6");
let seven = document.getElementById("7");
let eight = document.getElementById("8");
let nine = document.getElementById("9");

//operators
let divide = document.getElementById("/");
let multiply = document.getElementById("*");
let subtract = document.getElementById("-");
let plus = document.getElementById("+");
let percentage = document.getElementById("%");
let equals = document.getElementById("=");

let clear = document.getElementById("C");

//input
let input = document.getElementById("input");

//display input numbers
decimal.addEventListener("click", () => {
    input.value += decimal.value;
});
zero.addEventListener("click", () => {
    input.value += zero.value;
});
one.addEventListener("click", () => {
    input.value += one.value;
});

two.addEventListener("click", () => {
    input.value += two.value;
});

three.addEventListener("click", () => {
    input.value += three.value;
});

four.addEventListener("click", () => {
    input.value += four.value;
});

five.addEventListener("click", () => {
    input.value += five.value;
});

six.addEventListener("click", () => {
    input.value += six.value;
});

seven.addEventListener("click", () => {
    input.value += seven.value;
});

eight.addEventListener("click", () => {
    input.value += eight.value;
});

nine.addEventListener("click", () => {
    input.value += nine.value;
});

//display operators

divide.addEventListener("click", () => {
    input.value += divide.value;
});

multiply.addEventListener("click", () => {
    input.value += multiply.value;
});

subtract.addEventListener("click", () => {
    input.value += subtract.value;
});

plus.addEventListener("click", () => {
    input.value += plus.value;
});

percentage.addEventListener("click", () => {
    input.value += percentage.value;
});

equals.addEventListener("click", () => {
    input.value += equals.value;
});

clear.addEventListener("click", () => {
    input.value = "";
});
