//Print lower traingle pattern using nested loop

function lowerLeftTrainglePattern (n){
    for (let i=1; i<=n; i++){
        let str = "";
        for (let j=1; j<=n-i; j++){
             str += "*";
        }
        console.log(str);
    }
}
lowerLeftTrainglePattern(6);