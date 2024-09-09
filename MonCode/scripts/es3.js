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
        let h1=document.querySelector("h1"); // Premier h1 trouvé
    });

})();


function Voiture(){
    this.marque="Peugeot";
}

let v=new Voiture();





