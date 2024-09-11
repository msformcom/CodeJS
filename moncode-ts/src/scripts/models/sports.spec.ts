import "jasmine"; // developpé en js 
import { Sport } from "./sport";
// => npm i @types/jasmine --save-dev pour que ts reconnaisse les méthodes

describe("classe Sport test",()=>{
   
    it("Doit instancier avec libelle > 4 caractères",()=>{
        let s=new Sport("","Basket");
        expect(s.libelle).toBe("Basket");
    });

    it("Doit faire une erreur avec libelle <4 caractères",()=>{
        
        try {
            // Ce code est sensé jeter une erreur
            let s=new Sport("","Fer");
        } catch (error) {
            var erreur=error
        }
     
        expect(erreur).toBeTruthy();
    });
});