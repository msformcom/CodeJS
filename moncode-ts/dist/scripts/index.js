import { Sport } from "./models/sport.js";
let a = 1;
let s = new Sport("nike", "basket");
console.log(s.data);
// if(!s.libelle){
//     s.libelle="Basket";
// } 
// ! indique que la donnée n'est pas falsy
let libelle = s.libelle.toLowerCase();
