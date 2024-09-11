import { Sport } from "../../scripts/models/sport";
import { SportDTO } from "./sport-dto";

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("#btn_chercher")!.addEventListener("click",async (e)=>{
        (e.target as HTMLButtonElement).disabled=true;
        (document.querySelector("#div_message") as HTMLDivElement).innerHTML="En cours";
       try {
        let reponse=await fetch("/sports");
        // désérialisation de l'objet envoyé par le server
        // + typage
        let tableau=await reponse.json() as SportDTO[];
        // transformation en poco => validation 
        let tableauPoco=tableau.map(e=>new Sport(e.s,e.l));
        let ul=document.querySelector("#ul_resultats");
        tableauPoco.forEach(e=>{
            let li=document.createElement("li");
            li.innerHTML=`Libelle : ${e.libelle}`;
            ul?.append(li);
        });
        (e.target as HTMLButtonElement).disabled=false;
        (document.querySelector("#div_message") as HTMLDivElement).innerHTML="";
 
       } catch (error) {
        (e.target as HTMLButtonElement).disabled=false;
        (document.querySelector("#div_message") as HTMLDivElement).innerHTML="Erreur";
 
       }
   })
});