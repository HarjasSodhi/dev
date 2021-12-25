let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let ans = []
// let j = 0
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//         ans[j] = arr[i]
//         j++
//     }
// }
// console.log(ans);
function ODDEVEN(d, i) {
    if (d % 2 == 0) {
        return false;
    }
    else { return true; }
}
ans = arr.filter(ODDEVEN);
console.log(ans);