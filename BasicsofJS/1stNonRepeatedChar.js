let string = "powowpenvnienoinoinfv"
let i
for (i = 0; i < string.length; i++) {
    let count = 1;
    for (let j = i + 1; j < string.length; j++) {
        if (string[i] == string[j]) {
            count = 2;
        }
    }
    if (count == 1) {
        console.log(string[i]);
        break;
    }
}