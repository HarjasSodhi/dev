const fs = require('fs');
//let i = 1;
// let data = '';
// for (let j = 0; j < Math.floor(Math.random() * 10); j++) {
//     data = data + Math.floor(Math.random() * 101) + '\n';
// }
// fs.writeFile(i + '.txt', data, callback);
// function callback(err) {
//     if (!err) {
//         if (i < 10) {
//             data = '';
//             i++;
//             for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
//                 data = data + Math.floor(Math.random() * 101) + '\n';
//             }
//             fs.writeFile(i + '.txt', data, callback);
//         }
//     }
// }
//or
let i=0;
function callback(err) {
    if (!err) {
        if (i < 10) {
            let data = '';
            i++;
            for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
                data = data + Math.floor(Math.random() * 101) + '\n';
            }
            fs.writeFile(i + '.txt', data, callback);
        }
    }
}
callback(undefined);