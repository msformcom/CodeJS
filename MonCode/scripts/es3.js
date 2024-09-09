// ES => EcmaScript => Specification d'uniformisation des langages
// ES3 => 1999
// ES6 => 2015  ES2015 => apport de nouvelles fonctionalités
// ES 2010
// ...
// ES2023

// closure => function créée et exécutée imédiatement
// sert à créer un context de variables indépendant
(function (){
    // var ES3 => let ES6;
    let  a=1; // JS => non typé 

    //...
    //...
    for(let a=0;a<10;a++){

    }

  
    // ..

    // valeur de a ? => 10

    var alert="Message important";
    // alert est une variable locale
    // lorsque exécuté au niveau du scrit => on change les objets contenus dans window

    // sans window. => variable locale
    // window.alert("coucou");
    // Problème !
    console.log(a);

    // obtenir une reference vers le H1 dans la page

    document.addEventListener("DOMContentLoaded",function(){
        // Fonction exécutée après le chargement complet du document
        let h1; // undefined
        h1=document.querySelectorAll("h1"); // Premier h1 trouvé
    });

})();

// class 
function Voiture(marque){
    // this => contexte d'exécution de la fonction
    this.marque=marque ? marque : "Peugeot";
    this.demarre=false;

}
// Danger du prototype => remplacer une fonction du system
Geolocation.prototype.getCurrentPosition=function(){}

window.alert=function(message){

}

var oldConsole=window.console;
// proxy - monkey
window.console.log=function(message){
    oldConsole.log(Date.now + " : "+message);
}

Voiture.prototype.demarrer=function(){
    this.demarre=true;
}

// Exécuter la méthode du prototype
// this = v

let v=new Voiture("Citroen");
v.demarrer();
// objet v crée
// v.constructor => Voiture
// Voiture() => this qui pointe vers v
// v.marque="Peugeot";

// prototype
Voiture.prototype.nbRoues=4;

let n=v.nbRoues;
// 1) le systeme regarde dans v si v contient une valeur propre pour nbRoues
// 2) le systeme va regarder dans le prototype du constructor de v



// Changement de nbRoues uniquement pour v
v.nbRoues=5;
 n=v.nbRoues; // 5

 // Prototype d'un classe => ajout d'une valeur à toutes les instances
 Voiture.prototype.nbRoues=6;

 delete v.nbRoues;

 let monNom="Dominique";

 function ellipsis(n){
    if(this.length<=n){
        return this;
    }
    return this.substring(0,n-3)+"...";
 }

 //upperCase(toto(ellispsis(monNom,7)));

 String.prototype.ellispsis=function(n){
    if(this.length<=n){
        return this;
    }
    return this.substring(0,n-3)+"...";
 }
 let prenomReduit=monNom.ellispsis(7).toUpperCase(); // Domi...

 console.log(v);

 
 // Contexte d'exécution d'une fonction
 // window.demarrer=function(){....}
function demarrer(){
    this.demarre=true;
}
demarrer(); // this dans demarrer => window
demarrer.call(v); // this => v

for(var e in v){} // "marque","demarrer" => clés de v

function sum(){
    let vraiTableau=[1,2,3];
    let t=arguments; // [1,6,7,8]
    let r=0;
    for(let e of t){
        console.log(e);
    } // Itération 1,6,7,8
    for(let e in t){
        console.log(e);
    } // Itération 0,1,2,3

    for(let n=0;n<t.length;n++){
        let valeur=t[n];
        r+=valeur;
    }
    return r;
}

var s=sum(1,6,7,8); //22

// Se comporte comme un tableau mais en est pas un
let pseudoTableau={
    "0":1,
    "1":2,
    length:2
}
for(let n=0;n<pseudoTableau.length;n++){
    let valeur=pseudoTableau[n];
    r+=valeur;
}


// Problème de javascript
// pas de typage des variables
// quelle version utiliser 

var f=(a,b)=>a+b; // fonctions fléchées
var f1=function(a,b){ // fonction classique
    return a+b;
}

var dateNaissance=new Date(1967,19,42); // 11 sept 1968
// string template
var chaine=`La date 
                    est ${dateNaissance}`; // altgr + 7
var chaine="La date est \n\t\t\t"+ Date.now;