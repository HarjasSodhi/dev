let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
let arr2 = []
let k = 0
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
        arr2[k] = arr[i][j];
        k++
    }
}
console.log(arr2);