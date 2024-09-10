describe("Spread",()=>{
    function addition(a,b,c){
        return a+b+c;
    }

    // Typescript seulement
    function multiplication(a,b,...c){
        return a*b*c.reduce((a,v)=>a*v,1);
    }

    it("tableau spread",()=>{
        let tabA=[1,2,3];
        let tabB=[4,5,6];
        let tabAetB=[...tabA,...tabB];        
    });

    it("spread de parametres",()=>{
        let tabA=[1,2,3];
        var s=addition(...tabA);

        multiplication(1,2,9,7,5);
    })

    it("spread sur objets",()=>{
        let o={nom:"Mauras", prenom:"Dominique"};
        let o2={ prenom:"Dom", age:55};
        let o3={};
        Object.assign(o3,o); // je fusionne o2 à o {nom:"Mauras", prenom:"Dom", age:55}
        Object.assign(o3,o2);

        let o4={...o,...o2};

        o4.toto=5;
        o4["toto"]=5;
        o4["\€d ze"]=5;

    });

});