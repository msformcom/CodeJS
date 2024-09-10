// iterable

describe("Iterable",()=>{
    it("iteration",()=>{
        var tab=[1,8,4,3,5];
        for(let e of tab){
            console.log(e);
        }

        let iterator=tab[Symbol.iterator](); // curseur 
        let v=iterator.next();
        while(!v.done){
            let e=v.value;
            console.log(e);
            v=iterator.next();
        }

        // Generator / Iterator
        // Fonction qui renvoit un iterable
        function* NombrePairs(){
            let i=0;
            while(true){
                yield i;
                i+=2;
            }
        }

        var s=NombrePairs();

        // for(var e of NombrePairs()){

        //     console.log(e);
        // }

        // 1 1 2 3 5 8 

        function* Fibo(){
            let i0=0;
            let i1=1;

            while (true){
                let [a,b,c]=[1,2,3]
                yield i1;   
                // destructuring => affectation des valeurs d'un tableau à un tableau de variable
                [i0,i1]=[i1,i0+i1];
            }
        }

        for(var e of Fibo()){
            console.log(e);
        }





        for(let c of "Coucou"){

        }

        function getEntiers(){
            let entiers =[1,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9,8,3,6,7,2,9];
            let petitsEntiers=entiers.where(c=>c<=8); //1,8,3........
            return petitsEntiers;
        }


         for(let e of getEntiers()){
            console.log(e);
            break;
        }

    });
});