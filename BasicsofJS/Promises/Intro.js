let a = 1;
let EP = new Promise(function (res, rej) {
    if (a % 2 == 0) {
        res("even");
    }
    else rej("odd");
})
EP.then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err)
});