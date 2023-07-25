//1
function createArray(start, end) {
    let arr = []
    if (start < 0 || end < 0) {
        console.error('No negatives')
    } else {
        for (let i = start; i <= end; i++) {
            arr.push(i)
        }
    }
    return arr
}

//2
function printNumbersRecursive(a, b) {
    if (a < 0 || b < 0) {
        console.error('No negatives')
    } else {
        for (let i = a; i < b; i++) {
            for (let j = 0; j < i - a + 1; j++) {
                console.log(i)
            }
        }

    }
}

//3
function randomArray(k) {
    let arr = []
    for (let i = 0; i < k; i++) {
        arr.push(Math.floor(Math.random() * 500))
    }
    return arr
}

//4
function compact(arr) {
    let newArr = []
    for (let num in arr) {
        if (!newArr.includes(arr[num])) {
            newArr.push(arr[num])
        }
    }
    return newArr
}

//5
const inputArray = [5, 'Limit', 12, 'a', '3', 99, 2, [2, 4, 3, '33', 'a', 'text'], 'strong', 'broun']
function compact(arr) {
    let intArr = []
    let stringArr = []
    for (let num in arr) {
        if (Array.isArray(arr[num])) {
            let hiddenArr = arr[num]
            for (let index in hiddenArr) {
                if (typeof hiddenArr[index] === 'number') {
                    if (!intArr.includes(hiddenArr[index])) intArr.push(hiddenArr[index])
                } else if (typeof hiddenArr[index] === 'string') {
                    if (!stringArr.includes(hiddenArr[index])) stringArr.push(hiddenArr[index])
                }
            }
        } else if (typeof arr[num] === 'number') {
            if (!intArr.includes(arr[num])) intArr.push(arr[num])
        } else if (typeof arr[num] === 'string') {
            if (!stringArr.includes(arr[num])) stringArr.push(arr[num])
        } else {
            console.error('Input error')
        }
    }
    return [intArr, stringArr]
}

//6
function calc(a, b, op) {
    switch (op) {
        case 1:
            return a - b
        case 2:
            return a * b
        case 3:
            return a / b
        default:
            return a + b
    }
}

//7
function findUnique(arr) {
    const uniqueSet = new Set(arr);
    return uniqueSet.size === arr.length;
}

//8
function create(string) {
    return function check(arg) {
        return string === arg
    }
}



