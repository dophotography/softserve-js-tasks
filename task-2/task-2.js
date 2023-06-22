//1
const isTrue = (a, b, c) => a < b && b < c

//2
let x = 1;
let y = 2;

let res1 = String(x) + y
console.log(res1)
console.log(typeof res1)

let res2 = Boolean(x) + String(y)
console.log(res2)
console.log(typeof res2)

let res3 = Boolean(x < y)
console.log(res3)
console.log(typeof res3)

let res4 = Math.sqrt(-x * y)
console.log(res4)
console.log(typeof res4)

//3
const isAdult = confirm('Are you 18 years old?')
const ageMessage = () => {
    if (isAdult) {
        alert('You are more than 18 y.o.')
    } else {
        alert('You are too young')
    }
}
ageMessage()

//4
let side1 = parseFloat(prompt("Enter first side of triangle:"));
let side2 = parseFloat(prompt("Enter second side of triangle:"));
let side3 = parseFloat(prompt("Enter third side of triangle:"));

if (isNaN(side1) || isNaN(side2) || isNaN(side3) || side1 <= 0 || side2 <= 0 || side3 <= 0) {
  console.log("Incorrect data");
} else {
  let halfPerimeter = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(halfPerimeter * (halfPerimeter - side1) * (halfPerimeter - side2) * (halfPerimeter - side3));
  
  if (isNaN(area)) {
    console.log("Incorrect data");
  } else {
    console.log("Triangle аrea: " + area.toFixed(3));

    let isRight = false;

    if (side1 ** 2 === side2 **2 + side3 ** 2 ||
        side2 ** 2 === side1 **2 + side3 ** 2 ||
        side3 ** 2 === side2 **2 + side1 ** 2) {
      isRight = true;
    }

    console.log("Triangle is right: " + isRight);
  }
}

//5




