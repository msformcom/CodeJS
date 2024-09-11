// Import du fichier js contenant le code
import '../../node_modules/rxjs/dist/bundles/rxjs.umd.js';
document.addEventListener("DOMContentLoaded", () => {
    let espace = document.querySelector("#espace");
    let vitesseElement = document.querySelector("#vitesse");
    // Ceci permet de créer un Observable à partir de l'évenement mousemove de espace
    rxjs.fromEvent(espace, "mousemove") // 1 sortie par 10ms
        // j'ajoute un traitement à chaque sorte
        .pipe(rxjs.tap(e => { console.log({ x: e.clientX, y: e.clientY }); })) // console.log
        .pipe(rxjs.throttleTime(200)) // je ne retiens qu'un évènement tous les 200ms maximum
        .pipe(rxjs.bufferCount(2, 1)) // je souhaite avoir les 2 dernières sorties dans un tableau
        .pipe(rxjs.map(t => {
        let [e1, e2] = t;
        let distance = Math.sqrt(Math.pow(e1.clientX - e2.clientX, 2) + Math.pow(e1.clientY - e2.clientY, 2));
        let temps = e2.timeStamp - e1.timeStamp;
        return distance / temps;
    })) // Calcul de la vitesse
        .pipe(rxjs.tap(v => vitesseElement.innerHTML = v.toFixed(3))); // affichage
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3J4anMvcnhqcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekMsT0FBTyxrREFBa0QsQ0FBQztBQUkxRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUMsR0FBRSxFQUFFO0lBQzdDLElBQUksTUFBTSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFnQixDQUFDO0lBRTVELElBQUksY0FBYyxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFnQixDQUFDO0lBQ3JFLGlGQUFpRjtJQUNqRixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBRSxXQUFXLENBQUMsQ0FBQyxvQkFBb0I7UUFDcEQsd0NBQXdDO1NBQ3ZDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsT0FBTyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYztTQUVoRixJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLHVEQUF1RDtTQUNwRixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyw0REFBNEQ7U0FDeEYsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLEVBQUU7UUFDZCxJQUFJLENBQUMsRUFBRSxFQUFDLEVBQUUsQ0FBQyxHQUFDLENBQUMsQ0FBQztRQUNkLElBQUksUUFBUSxHQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLEdBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxHQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLEtBQUssR0FBQyxFQUFFLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDcEMsT0FBTyxRQUFRLEdBQUMsS0FBSyxDQUFDO0lBQzFCLENBQUMsQ0FBQyxDQUFDLENBQUMsdUJBQXVCO1NBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQSxFQUFFLENBQUEsY0FBYyxDQUFDLFNBQVMsR0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLFlBQVk7QUFJOUUsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoicGFnZXMvcnhqcy9yeGpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IGR1IGZpY2hpZXIganMgY29udGVuYW50IGxlIGNvZGVcclxuaW1wb3J0ICcuLi8uLi9ub2RlX21vZHVsZXMvcnhqcy9kaXN0L2J1bmRsZXMvcnhqcy51bWQuanMnO1xyXG4vLyBpbXBvcnQganVzdGUgZGVzIHR5cGVzXHJcbi8vaW1wb3J0IHJ4anMsIHsgdGFwIH0gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9yeGpzL2Rpc3QvdHlwZXMvaW5kZXhcIjtcclxuZGVjbGFyZSBjb25zdCByeGpzOmFueTtcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwoKT0+e1xyXG4gICAgbGV0IGVzcGFjZT1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2VzcGFjZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBsZXQgdml0ZXNzZUVsZW1lbnQ9ZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN2aXRlc3NlXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgLy8gQ2VjaSBwZXJtZXQgZGUgY3LDqWVyIHVuIE9ic2VydmFibGUgw6AgcGFydGlyIGRlIGwnw6l2ZW5lbWVudCBtb3VzZW1vdmUgZGUgZXNwYWNlXHJcbiAgICByeGpzLmZyb21FdmVudChlc3BhY2UsIFwibW91c2Vtb3ZlXCIpIC8vIDEgc29ydGllIHBhciAxMG1zXHJcbiAgICAgICAgLy8gaidham91dGUgdW4gdHJhaXRlbWVudCDDoCBjaGFxdWUgc29ydGVcclxuICAgICAgICAucGlwZShyeGpzLnRhcChlID0+IHsgY29uc29sZS5sb2coe3g6ZS5jbGllbnRYLCB5OmUuY2xpZW50WX0pOyB9KSkgLy8gY29uc29sZS5sb2dcclxuICAgICAgICBcclxuICAgICAgICAucGlwZShyeGpzLnRocm90dGxlVGltZSgyMDApKSAvLyBqZSBuZSByZXRpZW5zIHF1J3VuIMOpdsOobmVtZW50IHRvdXMgbGVzIDIwMG1zIG1heGltdW1cclxuICAgICAgICAucGlwZShyeGpzLmJ1ZmZlckNvdW50KDIsMSkpIC8vIGplIHNvdWhhaXRlIGF2b2lyIGxlcyAyIGRlcm5pw6hyZXMgc29ydGllcyBkYW5zIHVuIHRhYmxlYXVcclxuICAgICAgICAucGlwZShyeGpzLm1hcCh0PT57XHJcbiAgICAgICAgICAgIGxldCBbZTEsZTJdPXQ7XHJcbiAgICAgICAgICAgIGxldCBkaXN0YW5jZT1NYXRoLnNxcnQoTWF0aC5wb3coZTEuY2xpZW50WC1lMi5jbGllbnRYLDIpK01hdGgucG93KGUxLmNsaWVudFktZTIuY2xpZW50WSwyKSk7XHJcbiAgICAgICAgICAgIGxldCB0ZW1wcz1lMi50aW1lU3RhbXAtZTEudGltZVN0YW1wO1xyXG4gICAgICAgICAgICByZXR1cm4gZGlzdGFuY2UvdGVtcHM7XHJcbiAgICAgICAgfSkpIC8vIENhbGN1bCBkZSBsYSB2aXRlc3NlXHJcbiAgICAgICAgLnBpcGUocnhqcy50YXAodj0+dml0ZXNzZUVsZW1lbnQuaW5uZXJIVE1MPXYudG9GaXhlZCgzKSkpIC8vIGFmZmljaGFnZVxyXG5cclxuXHJcblxyXG59KTtcclxuIl19
