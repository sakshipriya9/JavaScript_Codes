console.log("abc" == "abc"); //return true as both side is equal to each other.

//wit variable comparision
let x = "abc";
let y = "abc";
console.log(x == y); //return true as both side is equal to each other as per the value of the variable.

let z = String("abc");
let a = new String("abc");
console.log(z);
console.log(x);

//Comparision of these two variables
console.log(a == z);
//console.log(String("abc") == new String("abc"));
console.log(a == x);
//console.log(new String("abc") == "abc");
console.log(z == x);

//type of these variables
console.log(typeof x);
console.log(typeof a);
console.log(typeof z);
