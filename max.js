let tab = [11, -40,123,-5899, 600,-2];
let max = -Infinity;
for (let i=0; i<tab.length;i++){
    if (tab[i]>max){
        max=tab[i];
    }
}
console.log("les valeurs saisies sont " + tab);
console.log(" Max =" + max);