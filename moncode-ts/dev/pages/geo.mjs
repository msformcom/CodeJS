import { getPositionAsync } from "../scripts/services/mes-services.mjs";
// Cette bibliothèque est écrite en js
// => pas forcément d'export
// => ce qui est exporté n'est pas typé
import '/node_modules/suncalc/suncalc.js';
// Dire au compilateur que il existe qqchose SunCalc que je vais utilse
// Attente de la mise en place du document
document.addEventListener("DOMContentLoaded", async () => {
    try {
        let r = await getPositionAsync();
        let positionPlaceholder = document.querySelector("#position-placeholder");
        positionPlaceholder.innerHTML = `Position : ${r.latitude}, ${r.longitude}`;
        let data = SunCalc.getTimes(new Date(), r.latitude, r.longitude);
        positionPlaceholder.innerHTML += ` sunrise :${data.sunrise}`;
    }
    catch (error) {
        console.log(error.message);
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2dlby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNwRSxzQ0FBc0M7QUFDdEMsNEJBQTRCO0FBQzVCLHVDQUF1QztBQUN2QyxPQUFTLGtDQUFrQyxDQUFDO0FBRTVDLHVFQUF1RTtBQUd2RSwwQ0FBMEM7QUFDMUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFDLEtBQUssSUFBRyxFQUFFO0lBQ25ELElBQUksQ0FBQztRQUNELElBQUksQ0FBQyxHQUFDLE1BQU8sZ0JBQWdCLEVBQUUsQ0FBQztRQUNoQyxJQUFJLG1CQUFtQixHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsdUJBQXVCLENBQUUsQ0FBQztRQUN6RSxtQkFBbUIsQ0FBQyxTQUFTLEdBQUMsY0FBYyxDQUFDLENBQUMsUUFBUSxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTtRQUN4RSxJQUFJLElBQUksR0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QsbUJBQW1CLENBQUMsU0FBUyxJQUFFLGFBQWEsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRS9ELENBQUM7SUFBQyxPQUFPLEtBQUssRUFBRyxDQUFDO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBRSxLQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztBQUdMLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InBhZ2VzL2dlby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldFBvc2l0aW9uQXN5bmMgfSBmcm9tIFwiLi4vc2NyaXB0cy9zZXJ2aWNlcy9tZXMtc2VydmljZXNcIjtcclxuLy8gQ2V0dGUgYmlibGlvdGjDqHF1ZSBlc3Qgw6ljcml0ZSBlbiBqc1xyXG4vLyA9PiBwYXMgZm9yY8OpbWVudCBkJ2V4cG9ydFxyXG4vLyA9PiBjZSBxdWkgZXN0IGV4cG9ydMOpIG4nZXN0IHBhcyB0eXDDqVxyXG5pbXBvcnQgICAnL25vZGVfbW9kdWxlcy9zdW5jYWxjL3N1bmNhbGMuanMnO1xyXG5kZWNsYXJlIGNvbnN0IFN1bkNhbGMgOiBhbnk7XHJcbi8vIERpcmUgYXUgY29tcGlsYXRldXIgcXVlIGlsIGV4aXN0ZSBxcWNob3NlIFN1bkNhbGMgcXVlIGplIHZhaXMgdXRpbHNlXHJcblxyXG5cclxuLy8gQXR0ZW50ZSBkZSBsYSBtaXNlIGVuIHBsYWNlIGR1IGRvY3VtZW50XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsYXN5bmMgKCk9PntcclxuICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IHI9YXdhaXQgIGdldFBvc2l0aW9uQXN5bmMoKTtcclxuICAgICAgICBsZXQgcG9zaXRpb25QbGFjZWhvbGRlcj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Bvc2l0aW9uLXBsYWNlaG9sZGVyXCIpITtcclxuICAgICAgICBwb3NpdGlvblBsYWNlaG9sZGVyLmlubmVySFRNTD1gUG9zaXRpb24gOiAke3IubGF0aXR1ZGV9LCAke3IubG9uZ2l0dWRlfWBcclxuICAgICAgICBsZXQgZGF0YT1TdW5DYWxjLmdldFRpbWVzKG5ldyBEYXRlKCksci5sYXRpdHVkZSxyLmxvbmdpdHVkZSk7XHJcbiAgICAgICAgcG9zaXRpb25QbGFjZWhvbGRlci5pbm5lckhUTUwrPWAgc3VucmlzZSA6JHtkYXRhLnN1bnJpc2V9YDtcclxuICAgXHJcbiAgICB9IGNhdGNoIChlcnJvciApIHtcclxuICAgICAgICBjb25zb2xlLmxvZygoZXJyb3IgYXMgRXJyb3IpLm1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gIFxyXG5cclxufSk7Il19
