// je vais réagir à un message envoyé par le code principale
declare interface ParamsAddition {a:number,b:number}

self.addEventListener("message",(e:MessageEvent)=>{
    // e.data contient l'objet envoye par le thread principal
    let o=e.data as ParamsAddition;
    let r=0;
    for(let i=0;i<o.a;i++){
        r++;
    }
    self.postMessage({state:"mi parcours"});
    for(let i=0;i<o.b;i++){
        r++;
    }
    self.postMessage({result:r});
})