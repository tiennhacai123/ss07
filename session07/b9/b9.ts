function isPrime(number:number){
    if(number<=1){
        return false
    }
    for(let i = 2;i<=Math.sqrt(number);i++){
        if(number%i==0){
            return false;
        }
    }
    return true;
}
function Arr(arr: number[]):boolean{
    return arr.every(isPrime);
}
let num1:number[]=[1,3,4,2,7,9,32,43,12,45]
let num2:number[]=[3,5,7,11,13];
console.log(Arr(num1));
console.log(Arr(num2));

