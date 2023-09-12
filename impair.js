let tab = [];
let somme = 0;
for (let i = 1; i <50 ; i++){
    if (i %2 == 1){
        tab[i] = i;
        somme += tab[i];
        console.log(tab[i]);
    }
}
    somme = somme +50;
    console.log("somme =" + somme);