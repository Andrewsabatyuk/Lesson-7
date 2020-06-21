let a = prompt('Enter your number ');
let b = prompt('Enter next number ');
let c = prompt('Enter next number ');

function min(a,b,c){
    if (a < b && a < c){
        return a;
    } else if (b < a && b < c){
        return b;
    } else{
        return c
    }
}
alert(min(a,b,c));