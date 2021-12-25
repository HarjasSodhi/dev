let int =2;
let binary="";
while(int>0){
    binary=parseInt(int%2)+binary;//can also use Math.floor(int%2);but then use parseInt()for conversion.
    int =parseInt(int/2);//can also use Math.floor(int/2);but then use parseInt()for conversion.
}
console.log(binary)