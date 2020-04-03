var num1 = 2;
var num2 = 5;


function bigger(a,b){
   if(a>b){return a}
   if(a<b){return b}
}
console.log(`Większa liczba z ${num1}, ${num2} to: ${bigger(num1,num2)}`)