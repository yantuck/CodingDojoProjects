var x = 5;
    
function setX(newValue) {
    x = newValue; 
}
    
console.log(x);
setX(15);
console.log(x);



var x = 5;
    
function addToX(amount) {
    return x + amount;
    console.log("hello there");
}
    
console.log(x); //5
var result = addToX(-10); //invoke function 5-(-10)
console.log(result); //-5
console.log(x); //5



function isPal(arr) {
    for(var left=0; left<arr.length/2; left++) { //length = 2.5     length =3.5
        var right = arr.length-1-left; //6-1-0 = 5                     right= 7-1-0 =6
        if(arr[left] != arr[right]) { //arr[0] != arr[5]            arr[0]=arr[6]
            return "Not a pal-indrome!";
        }
    }
    return "Pal-indrome!";
}
    
var result1 = isPal( [1, 1, 2, 2, 1] );
console.log(result1); //Not a pal-indrome!
    
var result2 = isPal( [3, 2, 1, 1, 2, 3] );
console.log(result2); //Pal-indrome!
