const fs = require('fs');
let j = 0;
// function SerialWrite() {
//     if (j < 10) {
//         let data = '';
//         j++;
//         for (let i = 0; i < Math.floor(Math.random() * 10); i++) {
//             data = data + Math.floor(Math.random() * 101) + '\n';
//         }
//         fs.promises.writeFile(j + '.txt', data).then(function () {
//             SerialWrite();
//         });
//     }
// }
SerialWrite();
function ReadSerial() {
    if (j < 10) {
        j++
        fs.promises.readFile(j + '.txt', 'utf-8').then(function (data) {
            console.log(data);
            ReadSerial();
        });
    }
}
ReadSerial();