import 'jasmine'; // developpé en js 
import { Sport } from "./sport.mjs"; // convention => pas d'extension
// => npm i @types/jasmine --save-dev pour que ts reconnaisse les méthodes
describe("classe Sport test", () => {
    it("Doit instancier avec libelle > 4 caractères", () => {
        let s = new Sport("", "Basket");
        expect(s.libelle).toBe("Basket");
    });
    it("Doit faire une erreur avec libelle <4 caractères", () => {
        try {
            // Ce code est sensé jeter une erreur
            let s = new Sport("", "Fer");
        }
        catch (error) {
            var erreur = error;
        }
        expect(erreur).toBeTruthy();
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvbW9kZWxzL3Nwb3J0cy5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sU0FBUyxDQUFDLENBQUMsbUJBQW1CO0FBQ3JDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxTQUFTLENBQUMsQ0FBQyxnQ0FBZ0M7QUFDakUsMEVBQTBFO0FBRTFFLFFBQVEsQ0FBQyxtQkFBbUIsRUFBQyxHQUFFLEVBQUU7SUFFN0IsRUFBRSxDQUFDLDZDQUE2QyxFQUFDLEdBQUUsRUFBRTtRQUNqRCxJQUFJLENBQUMsR0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUMsUUFBUSxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsa0RBQWtELEVBQUMsR0FBRSxFQUFFO1FBRXRELElBQUksQ0FBQztZQUNELHFDQUFxQztZQUNyQyxJQUFJLENBQUMsR0FBQyxJQUFJLEtBQUssQ0FBQyxFQUFFLEVBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUIsQ0FBQztRQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDYixJQUFJLE1BQU0sR0FBQyxLQUFLLENBQUE7UUFDcEIsQ0FBQztRQUVELE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUNoQyxDQUFDLENBQUMsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InNjcmlwdHMvbW9kZWxzL3Nwb3J0cy5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdqYXNtaW5lJzsgLy8gZGV2ZWxvcHDDqSBlbiBqcyBcclxuaW1wb3J0IHsgU3BvcnQgfSBmcm9tIFwiLi9zcG9ydFwiOyAvLyBjb252ZW50aW9uID0+IHBhcyBkJ2V4dGVuc2lvblxyXG4vLyA9PiBucG0gaSBAdHlwZXMvamFzbWluZSAtLXNhdmUtZGV2IHBvdXIgcXVlIHRzIHJlY29ubmFpc3NlIGxlcyBtw6l0aG9kZXNcclxuXHJcbmRlc2NyaWJlKFwiY2xhc3NlIFNwb3J0IHRlc3RcIiwoKT0+e1xyXG4gICBcclxuICAgIGl0KFwiRG9pdCBpbnN0YW5jaWVyIGF2ZWMgbGliZWxsZSA+IDQgY2FyYWN0w6hyZXNcIiwoKT0+e1xyXG4gICAgICAgIGxldCBzPW5ldyBTcG9ydChcIlwiLFwiQmFza2V0XCIpO1xyXG4gICAgICAgIGV4cGVjdChzLmxpYmVsbGUpLnRvQmUoXCJCYXNrZXRcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpdChcIkRvaXQgZmFpcmUgdW5lIGVycmV1ciBhdmVjIGxpYmVsbGUgPDQgY2FyYWN0w6hyZXNcIiwoKT0+e1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIENlIGNvZGUgZXN0IHNlbnPDqSBqZXRlciB1bmUgZXJyZXVyXHJcbiAgICAgICAgICAgIGxldCBzPW5ldyBTcG9ydChcIlwiLFwiRmVyXCIpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHZhciBlcnJldXI9ZXJyb3JcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgZXhwZWN0KGVycmV1cikudG9CZVRydXRoeSgpO1xyXG4gICAgfSk7XHJcbn0pOyJdfQ==
