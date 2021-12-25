const fs = require('fs');
let data = '';
let p1 = fs.promises.readFile('1.txt', 'utf-8').then(function (data) {
    console.log('p1');
    return data;
});
let p2 = fs.promises.readFile('2.txt', 'utf-8').then(function (data) {
    console.log('p2');
    return data;
});
let CombinedPromise = Promise.all([p1, p2]);
CombinedPromise.then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err);
});