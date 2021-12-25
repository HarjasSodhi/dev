let arr1=[0,1,2,3,4];
let arr2=['a','b','c','d','e'];
let obj={

}
if(arr1.length!=arr2.length||arr1.length==0||arr2.length==0)console.log("Not Possible");
else{
for(let i=0;i<arr1.length;i++)
obj[arr1[i]]=arr2[i];

console.log(obj);
}