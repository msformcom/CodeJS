import { getPositionAsync } from "../services/mes-services.js";
// Cette bibliothèque est écrite en js
// => pas forcément d'export
// => ce qui est exporté n'est pas typé
import   "../services/suncalc.js";
declare const SunCalc : any;
// Dire au compilateur que il existe qqchose SunCalc que je vais utilse


// Attente de la mise en place du document
document.addEventListener("DOMContentLoaded",async ()=>{
    try {
        let r=await  getPositionAsync();
        let positionPlaceholder=document.querySelector("#position-placeholder")!;
        positionPlaceholder.innerHTML=`Position : ${r.latitude}, ${r.longitude}`
        let data=SunCalc.getTimes(new Date(),r.latitude,r.longitude);
        positionPlaceholder.innerHTML+=` sunrise :${data.sunrise}`;
   
    } catch (error ) {
        console.log((error as Error).message);
    }
  

});