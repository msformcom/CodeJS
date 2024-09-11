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
    get libelle() {
        return this._libelle;
    }
    set libelle(value) {
        if (value.length < 4) {
            throw new Error("Le libelle doit avoir au moins 3 caractères");
        }
        this._libelle = value;
    }
}
_Sport_data = new WeakMap();

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvbW9kZWxzL3Nwb3J0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxNQUFNLE9BQU8sS0FBSztJQUVkLGVBQWU7SUFDZix5REFBeUQ7SUFDekQsZ0RBQWdEO0lBQ2hELFlBQW1CLE9BQWMsRUFBQyxPQUFjO1FBQTdCLFlBQU8sR0FBUCxPQUFPLENBQU87UUFJakMsMENBQTBDO1FBQzFDLHNCQUFNLE1BQU0sRUFBQztRQUViLHVEQUF1RDtRQUMvQyxVQUFLLEdBQUMsTUFBTSxDQUFDO1FBUGpCLElBQUksQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFDO0lBRXpCLENBQUM7SUFPRCxJQUFXLE9BQU87UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDekIsQ0FBQztJQUNELElBQVcsT0FBTyxDQUFDLEtBQWE7UUFDNUIsSUFBRyxLQUFLLENBQUMsTUFBTSxHQUFDLENBQUMsRUFBQyxDQUFDO1lBQ2YsTUFBTSxJQUFJLEtBQUssQ0FBQyw2Q0FBNkMsQ0FBQyxDQUFBO1FBQ2xFLENBQUM7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztJQUMxQixDQUFDO0NBQ0oiLCJmaWxlIjoic2NyaXB0cy9tb2RlbHMvc3BvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgU3BvcnR7XHJcblxyXG4gICAgLy8gY29uc3RydWN0ZXVyXHJcbiAgICAvLyBwYXJhbWV0cmUgYXZlYyBcInB1YmxpY1wiID0+IGRldmllbnQgdW4gY2hhbXBzIMOpZ2FsZW1lbnRcclxuICAgIC8vIGluaXRpYWxpc8OpIGF2ZWMgbGEgdmFsZXVyIHBhc3PDqWUgZW4gcGFyYW3DqHRyZVxyXG4gICAgY29uc3RydWN0b3IocHVibGljIHNwb25zb3I6c3RyaW5nLGxpYmVsbGU6c3RyaW5nKSB7XHJcbiAgICAgICAgdGhpcy5saWJlbGxlPWxpYmVsbGU7XHJcbiBcclxuICAgIH1cclxuICAgIC8vIHJlbmQgdW5lIGRvbm7DqWUgcHJpdsOpZSAoanMgPT4gZWZmZWN0aWYpXHJcbiAgICAjZGF0YT1cIlRvdG9cIjtcclxuXHJcbiAgICAvLyBkw6ljbGFyZSB1biBjaGFtcCBwcml2w6kgKHRzID0+IHVuaXF1ZW1lbnQgZMOpY2xhcmF0aWYpXHJcbiAgICBwcml2YXRlIGRhdGEyPVwidG90b1wiO1xyXG4gICAgcHJpdmF0ZSBfbGliZWxsZSE6IHN0cmluZztcclxuICAgIHB1YmxpYyBnZXQgbGliZWxsZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9saWJlbGxlO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHNldCBsaWJlbGxlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZih2YWx1ZS5sZW5ndGg8NCl7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxlIGxpYmVsbGUgZG9pdCBhdm9pciBhdSBtb2lucyAzIGNhcmFjdMOocmVzXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xpYmVsbGUgPSB2YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
