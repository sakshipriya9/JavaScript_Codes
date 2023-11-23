//Print lower left traingle pattern using repeat method

function lowerLeftTrainglePattern (n){
    for(let i=n; i>=1; i--){
        let str = "* ";
        console.log(str.repeat(i));
    }
}
lowerLeftTrainglePattern(6);
