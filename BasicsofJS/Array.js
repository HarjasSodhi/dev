let arr = [1, 2, 3, 'harjas', true, 10.5];
for (let i = 0; i < 6; i++) {
    console.log(arr[i]);
}
let arr2 = [];
arr2.push("hello");//adds element in the end.
console.log(arr2);
arr2.pop();//pops last element index.
console.log(arr2);
arr2[5] = "bye";
console.log(arr2);
console.log(arr[arr.length - 1]);