//Hollow diamond pattern using nested loop
function hollowDiamondPattern (n){
    for(let i=1; i<=n; i++){
        let str = "";
        for(let j=1; j<=2*n; j++){
            if(i+j==n+1 || (i==j-+1)){
                str += "*";
            }
            else{
                str += " ";
            }
        }
        console.log(str);
    }
    for(let i=n-1; i>=1; i--){
        let str = "";
        for(let j=1; j<=2*n; j++){
            if(i+j==n+1 || (i==j-+1)){
                str += "*";
            }
            else{
                str += " ";
            }
        }
        console.log(str);
        }
    }
hollowDiamondPattern(4);