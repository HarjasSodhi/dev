let binary = "1001"
let num = 0;
let i = 0;
let ques = parseInt(binary);
while (ques > 0) {
    num = (parseInt(ques % 10) * Math.pow(2, i)) + num
    ques = parseInt(ques / 10)
    i++
}
console.log(num);