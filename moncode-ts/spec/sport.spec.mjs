import "jasmine";
import {Sport} from "../dist/scripts/models/sport.mjs"

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