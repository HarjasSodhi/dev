let arr1 = [true, false, true, true, false];
let arr2 = [];
let arr3 = [true];
let arr4 = [false]
function countTrue(param) {
    let counter = 0;
    if (param.length == 0) return 0;
    for (let i = 0; i < param.length; i++) {
        if (param[i]) {
            counter++;
        }
    }
    return counter;
}
console.log(countTrue(arr1));
console.log(countTrue(arr2));
console.log(countTrue(arr3));
console.log(countTrue(arr4));
console.log(countTrue([true, false, true, true, false]));