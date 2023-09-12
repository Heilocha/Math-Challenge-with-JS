let nb = 23;
let compteur = 0;
for (let i =1 ; i<=nb ; i ++){
    let reste = nb %i;
    if (reste == 0){
        compteur++ ;
    }
}
if (compteur == 2){
    console.log("premier");
}
else{
    console.log("non premier");
}