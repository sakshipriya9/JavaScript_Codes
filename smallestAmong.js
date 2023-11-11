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