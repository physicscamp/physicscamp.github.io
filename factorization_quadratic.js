let a,b,c,upper,lower;
a=prompt("a: ");
a=parseInt(a,10);
b=prompt("b: ");
b=parseInt(b,10);
c=prompt("c: ");
c=parseInt(c,10);
upper=prompt("Upper Limit: ");
upper=parseInt(upper,10);
lower=prompt("Lower Limit: ");
lower=parseInt(lower,10);
document.write("Factorization of following equation: (Developed by Indrajeet for helping students :)<br><br>")

document.write("("+a.toString(10)+")x<sup>2</sup>+("+b.toString(10)+")x+"+"("+c.toString(10)+") = ")
for(let i = lower; i<upper+1; i++){
    for(let j= lower; j<upper+1; j++){
        if(i*j==a*c && i+j==b){
            if(i<j){
                if(i<0 && j<0){
                    document.write("(x"+i.toString(10)+")(x"+j.toString(10)+")\n");
                } else if (i<0 && j>0){
                    document.write("(x"+i.toString(10)+")(x+"+j.toString(10)+")\n");
                } else if (i>0 && j<0){
                    document.write("(x+"+i.toString(10)+")(x"+j.toString(10)+")\n");
                } else if (i>0 && j>0){
                    document.write("(x+"+i.toString(10)+")(x+"+j.toString(10)+")\n");
                }
            }else if(i==j) {
                if (i<0 && j<0){
                    document.write("(x"+i.toString(10)+")(x"+j.toString(10)+")\n");
                } else if (i<0 && j>0){
                    document.write("(x"+i.toString(10)+")(x+"+j.toString(10)+")\n");
                } else if (i>0 && j<0){
                    document.write("(x+"+i.toString(10)+")(x"+j.toString(10)+")\n");
                } else if (i>0 && j>0){
                    document.write("(x+"+i.toString(10)+")(x+"+j.toString(10)+")\n");
                }
                
            }
            
        }
    }
}
