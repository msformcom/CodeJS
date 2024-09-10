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
    private _libelle!: string;
    public get libelle(): string {
        return this._libelle;
    }
    public set libelle(value: string) {
        if(value.length<4){
            throw new Error("Le libelle doit avoir au moins 3 caractères")
        }
        this._libelle = value;
    }
}

