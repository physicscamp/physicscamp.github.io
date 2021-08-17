let a,b,c,upper,lower;
a=prompt("a: ");
b=prompt("b: ");
c=prompt("c: ");
upper=prompt("Upper Limit: ");
lower=prompt("Lower Limit: ");
for(let i = lower; i<upper+1; i++){
    for(let j= lower; j<upper+1; j++){
        if(i*j==a*c && i+j==b){
            document.write(i+" "+j);
        }
    }
}


