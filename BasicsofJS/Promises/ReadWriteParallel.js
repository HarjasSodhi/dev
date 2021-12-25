const fs = require('fs');
// for(let j=1;j<=10;j++){
// let data='';
// for(let i=0;i<Math.floor(Math.random()*10);i++){
// data=data+Math.floor(Math.random()*101)+'\n';
// fs.promises.writeFile(j+'.txt',data);
// }
// }
let data = '';
let sum = 0;
for (let j = 1; j <= 10; j++) {
    data = fs.promises.readFile(j + '.txt', 'utf-8')
    data.then(function (data1) {
        let arr = data1.split('\n');
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] != '') sum += parseInt(arr[i]);
        }
        if (j == 10) console.log(sum);
    })
}