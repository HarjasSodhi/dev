const fs = require('fs');
let i = 1;
let sum = 0;
function ReadFile(err, data) {
    if (!err) {
        if (i < 10) {
            i++;
            let arr = data.split('\n');
            for (let j = 0; j < arr.length; j++) {
                if (arr[j] != '')
                    sum += parseInt(arr[j]);
            }
            fs.readFile(i + '.txt', 'utf-8', ReadFile);
        }
        else console.log(sum);
    }
}
fs.readFile(i + '.txt', 'utf-8', ReadFile);