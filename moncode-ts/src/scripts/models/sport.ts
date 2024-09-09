export class Sport{

    // constructeur
    // parametre avec "public" => devient un champs également
    // initialisé avec la valeur passée en paramètre
    constructor(public sponsor:string,libelle:string) {
        this.libelle=libelle;
        
    }
    // rend une donnée privée (js => effectif)
    #data="Toto";

    // déclare un champ privé (ts => uniquement déclaratif)
    private data2="toto";
    libelle : string ;
}