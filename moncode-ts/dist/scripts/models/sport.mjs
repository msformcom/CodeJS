var _Sport_data;export class Sport{constructor(t,e){this.sponsor=t,_Sport_data.set(this,"Toto"),this.data2="toto",this.libelle=e}get libelle(){return this._libelle}set libelle(t){if(t.length<4)throw new Error("Le libelle doit avoir au moins 3 caractères");this._libelle=t}}_Sport_data=new WeakMap;