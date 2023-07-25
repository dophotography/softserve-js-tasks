//1
let names = {
    first: "Tom",
    second: "Sam",
    third: "Ray",
    fourth: "Bob",
}

let {first: f, third: x, fifth = 'Name #5'} = names
outputTask1.innerHTML += `${f}<br>${x}<br>${fifth}`

//2
let data = {
    names: ["Sam", "Tom", "Ray", "Bob"],
    ages: [20, 24, 22, 26],
}

let { names: [name1, name2, name3, name4], ages: [age1, age2, age3, age4] } = data

outputTask2.innerHTML += `${name2}<br>${age2}<br>${name4}<br>${age4}`

//3
function mul(...args) {
  let multiple = 1

  for (const arg of args) {
    if (typeof arg === 'number') {
      multiple *= arg
    }
  }

  return multiple
}
  

outputTask3.innerHTML += `Multiplication of Number elements of array: ${mul(1, "str", 2, 3, true)}`

//4
function mapBuilder(keysArray, valuesArray) {
  let map = new Map();

  for (let i = 0; i < keysArray.length; i++) {
    map.set(keysArray[i], valuesArray[i])
  }

  return map
}

let keys = [1, 2, 3, 4]
let values = ["div", "span", "b", "i"]

let map = mapBuilder(keys, values) 

outputTask4.innerHTML += `Mapping: ${map}`

//5
let arr = [];

for (let i = 0; i <= 2; i++) {
  arr[i] = (function (num) {
    return function () {
      console.log(num);
    };
  })(i);
}

arr[0]()
arr[arr.length - 1]()

//6
let server = {
   data: 0,
   convertToString: function (callback) {
      callback(() => {
         return this.data + "";
      })
   }
}

let client = {
   server: server,
   result: "",
   calc: function (data) {
      this.server.data = data;
      this.server.convertToString(this.notification())
   },
   notification: function () {
      return (callback) => {
         this.result = callback()
      }
   }
}

client.calc(3456)
outputTask6.innerHTML += `Clients result: ${client.result}<br>Type of client's result: ${typeof client.result}`