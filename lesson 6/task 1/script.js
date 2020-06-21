/*function checkAge(age) { 

    if (age > 18) { 
        return true; 
    } else { 
        return confirm('Do You have permission?'); 
    } 
}*/

let age = prompt('enter your age');
 function checkAge(age){
    (age > 18) ? true: confirm('Do You have permission?');
}
checkAge(age);


let age = prompt('enter your age');
 function checkAge(age){
    age > 18  || confirm('Do You have permission?');
}
checkAge(age);
