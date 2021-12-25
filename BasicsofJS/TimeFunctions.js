var inter = setInterval(function () {
    console.log("hello");
}, 1000);
setTimeout(function () {
    clearInterval(inter);
}, 10000);