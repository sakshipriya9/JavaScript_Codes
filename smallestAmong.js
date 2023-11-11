/*Given an array of three numbers. You need to find the smallest among the three
numbers.*/
function smallestAmongThree(a, b, c){
    if(a < b && a < c){
        return a;
    }else if(b < a && b < c){
        return b;
    }else{
        return c;
    }
}
console.log(smallestAmongThree(34, 23, 54), "is the smallest among the three.");


//without function
let a = 45, b = 34, c = 94;
if(a < b && a < c){
    console.log("Minimum of all:", a);
}else if(b < a && b < c){
    console.log("Minimum of all:", b);
}else{
    console.log("Minimum of all:", c);
}