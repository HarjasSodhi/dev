let string = "hello my name is harjas sodhi"
let arr = string.split(" ")
for (let i = 0; i < arr.length; i++) {
    let temp = arr[i].substring(1, arr[i].length)
    arr[i] = arr[i][0].toUpperCase() + temp
}
console.log(arr.join(" "));