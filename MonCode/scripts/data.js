function sum(){
    let t=Array.from(arguments); // [8,2,6,3]
    return t.reduce((a,b)=>{
        console.log(`(${a},${b})`)
        return a+b;
    },0);  
}

var s=sum(8,2,6,3);

console.log(s);