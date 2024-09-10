import { Sport } from "./models/sport.js";

let a=1;
let s=new Sport("nike","basket");
console.log((s as any).data);
// if(!s.libelle){
//     s.libelle="Basket";
// } 

// ! indique que la donnée n'est pas falsy
let libelle=s.libelle!.toLowerCase();  