let arr = [1, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 1, 2, 3];
let ele
let max = 0
let count;
for (let i = 0; i < arr.length; i++) {
    count = 1
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] == arr[i]) {
            count++
        }
    }
    if (count > max) {
        max = count
        ele = arr[i]
    }
}
console.log(ele);