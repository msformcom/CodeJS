// Import du fichier js contenant le code
import '../../node_modules/rxjs/dist/bundles/rxjs.umd.js';
// import juste des types
import rxjs, { tap } from "../../node_modules/rxjs/dist/types/index";
//declare const rxjs:any;
rxjs.timer(0,1000)  // 0    1s   1   1s    2    1s    3   1s    4
    .pipe(rxjs.filter(c=>c%2==0)) // 0    2s    2    2s    4    2s    6    2s    8
    .pipe(rxjs.bufferCount(2,1))  //      2s  [0,2]  2s  [2,4]  2s   [4,6]
    .pipe(rxjs.map(t=>t[0]+t[1])) //      2s    2    2s    6    2s     10
    .pipe(rxjs.skip(2))           //      2s         2s         2s     10
document.addEventListener("DOMContentLoaded",()=>{
    let espace=document.querySelector("#espace") as HTMLElement;

    let vitesseElement=document.querySelector("#vitesse") as HTMLElement;
    // Ceci permet de créer un Observable à partir de l'évenement mousemove de espace
    rxjs.fromEvent(espace, "mousemove") // 1 sortie par 10ms
        // j'ajoute un traitement à chaque sorte
        .pipe(rxjs.tap(e => { console.log({x:e.clientX, y:e.clientY}); })) // console.log
        
        .pipe(rxjs.throttleTime(200)) // je ne retiens qu'un évènement tous les 200ms maximum
        .pipe(rxjs.bufferCount(2,1)) // je souhaite avoir les 2 dernières sorties dans un tableau
        .pipe(rxjs.map(t=>{
            let [e1,e2]=t;
            let distance=Math.sqrt(Math.pow(e1.clientX-e2.clientX,2)+Math.pow(e1.clientY-e2.clientY,2));
            let temps=e2.timeStamp-e1.timeStamp;
            return distance/temps;
        })) // Calcul de la vitesse
        .pipe(rxjs.tap(v=>vitesseElement.innerHTML=v.toFixed(3))) // affichage



});
