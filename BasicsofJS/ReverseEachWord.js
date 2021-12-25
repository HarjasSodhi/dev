let string = "hello my name is harjas sodhi"
let arr = string.split(" ")
let ans=[]
for(let i=0;i<arr.length;i++){
    for(let j=arr[i].length;j>=0;j--){
        ans.push(arr[i][j]);
    }
    ans.push(' ')
}
console.log(ans.join(''));