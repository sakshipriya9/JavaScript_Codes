function invertedHollowDiamondPattern (n){
    for(let i=1; i<=n; i++){
        let str = "";
        for(let j=1; j<2*n; j++){
            if(i+j>n+1 && (i>j-n+1)){
                str += " ";
            }
            else{
                str += "*"
            }
        }
        console.log(str);
    }
    for(let i=n-1; i>=1; i--){
        let str = "";
        for(j=1; j<2*n; j++){
            if(i+j>n+1 && (i>j-n+1)){
                str += " ";
            }
            else{
                str += "*"
            }
        }
        console.log(str);
    }
}
invertedHollowDiamondPattern(4);