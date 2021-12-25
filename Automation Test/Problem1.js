let arr1 = [1, 2, 3, 4, 5, 6, 7];
let arr2 = [8, 6, 33, 100];
let arr3 = [2, 55, 60, 97, 86];
function sevenBoom(param) {
    for (let i = 0; i < param.length; i++) {
        let str = '' + param[i];
        for (let j = 0; j < str.length; j++) {
            if (str[j] == '7') return 'Boom!';
        }
    }
    return "there is no 7 in the array";
}
console.log(sevenBoom(arr1));
console.log(sevenBoom(arr2));
console.log(sevenBoom(arr3));
console.log(sevenBoom([1, 2, 3, 5, 99923479322, 456, 34, 9]));
console.log(sevenBoom([]));