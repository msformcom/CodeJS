function addition(a:number,b:number){
    let r=0;
    for(let i=0;i<a;i++){
        r++;
    }
    for(let i=0;i<b;i++){
        r++;
    }
    return r;
}

// function additionAsync(a:number, b:number){
//     return new Promise((resolve,reject)=>{
//         var r=addition(a,b);
//         resolve(r);
//     })
// }

// (async function(){
//     console.log("Debut");
//     // fetch est un code natif => execution en parrallele
//     //fetch("http://www.google.fr");

//     // code js => execution en série 
//     additionAsync(10000000,10000000).then((r)=>{
//         console.log("fin : "+r);
//     });

//     // au bout de longtemps ce code sera exécuté
//     console.log("Suite : ");
// })();

// Création du worker
function additionAsync(a:number,b:number):Promise<number>{
    return new Promise((resolve,reject)=>{
        console.log("Debut");
        let ww=new Worker("./addition-worker.mjs");
        // j'envois les donner à traiter (pas de références)
        ww.postMessage({a:10000000,b:10000000})
        ww.addEventListener("error",()=>{
            reject(new Error("Pas possible"));
        });
        ww.addEventListener("message",(e)=>{
            let o=e.data;
            console.log(o);
            if(o.result){
                resolve(o.result);
            }
        });
        console.log("Ca continue");
    });
}

// Chaque addition prend 5s;
(async function(){
    let c1=additionAsync(10000000,10000000);
        // est-ce que l'addition est en cours de calcul ? oui
    let c2=additionAsync(20000000,30000000);
      // est-ce que l'addition est en cours de calcul ? oui
    // 1ms
      var r=await Promise.all([c1,c2]);
      // 5s 
    var rFinal=await additionAsync(...r);
    //
})();


