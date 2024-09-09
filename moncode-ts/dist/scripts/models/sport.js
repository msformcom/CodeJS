var _Sport_data;
export class Sport {
    // constructeur
    // parametre avec "public" => devient un champs également
    // initialisé avec la valeur passée en paramètre
    constructor(sponsor, libelle) {
        this.sponsor = sponsor;
        // rend une donnée privée (js => effectif)
        _Sport_data.set(this, "Toto");
        // déclare un champ privé (ts => uniquement déclaratif)
        this.data2 = "toto";
        this.libelle = libelle;
    }
}
_Sport_data = new WeakMap();
