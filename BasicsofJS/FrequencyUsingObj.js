let string ="wow"
let obj = {

}
for (let i = 0; i < string.length; i++) {
    if (obj[string[i]] == undefined) obj[string[i]] = 1
    else {
        obj[string[i]]++
    }

}
console.log(obj);