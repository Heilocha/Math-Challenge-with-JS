let tab = [0.5 , 2 , -0.4 , -5, -0.2];
let abs = [];
let min = Infinity;
for (let i=0 ; i< tab.length ; i ++){
    if (tab[i] <0){ 
        abs[i]= -1 * tab[i];
    }
    else  {
        abs[i] = tab [i];
    }
}
for( let i =0 ; i < tab.length; i++){
    if(abs[i]<min){
        min=abs[i];
        val=tab[i];
    }
}
console.log("le plus proche de zero est : " + val);
