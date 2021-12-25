const fs = require('fs');
//async function abc () {
//     await fs.promises.writeFile("1.txt", "hello");
//     let data = await fs.promises.readFile("1.txt", "utf-8");
//     console.log(data);
//     return "how are you";
// }

// async function main() {
//     let data = await abc();
//     console.log(data);
// }

// main();
let data = ''
function abc() {
    return new Promise(function (res, rej) {
        fs.promises.writeFile("1.txt", "hello").then(function () {
            fs.promises.readFile("1.txt", "utf-8").then(function (data) {
                console.log(data);
                res("how are you");
            });
        })
    });
}
function main() {
    return new Promise(function (res, rej) {
        abc().then(function (data) {
            console.log(data);
        });
    });
}
main();