let string = "tenet";
let checker = 0
for (let i = 0; i < string.length/2; i++) {
    if (string[i] != string[string.length - 1 - i]) {
        checker = 1;
        console.log("false"); break;
    }
}
if (checker == 0) {
    console.log("true");
}