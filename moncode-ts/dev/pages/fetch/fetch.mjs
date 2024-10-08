import { Sport } from "../../scripts/models/sport.mjs";
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#btn_chercher").addEventListener("click", async (e) => {
        e.target.disabled = true;
        document.querySelector("#div_message").innerHTML = "En cours";
        try {
            let reponse = await fetch("/sports");
            // désérialisation de l'objet envoyé par le server
            // + typage
            let tableau = await reponse.json();
            // transformation en poco => validation 
            let tableauPoco = tableau.map(e => new Sport(e.s, e.l));
            let ul = document.querySelector("#ul_resultats");
            tableauPoco.forEach(e => {
                let li = document.createElement("li");
                li.innerHTML = `Libelle : ${e.libelle}`;
                ul === null || ul === void 0 ? void 0 : ul.append(li);
            });
            e.target.disabled = false;
            document.querySelector("#div_message").innerHTML = "";
        }
        catch (error) {
            e.target.disabled = false;
            document.querySelector("#div_message").innerHTML = "Erreur";
        }
    });
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2ZldGNoL2ZldGNoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUduRCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUMsR0FBRSxFQUFFO0lBQzdDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFFLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFDLEtBQUssRUFBRSxDQUFDLEVBQUMsRUFBRTtRQUN4RSxDQUFDLENBQUMsTUFBNEIsQ0FBQyxRQUFRLEdBQUMsSUFBSSxDQUFDO1FBQzdDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFvQixDQUFDLFNBQVMsR0FBQyxVQUFVLENBQUM7UUFDakYsSUFBSSxDQUFDO1lBQ0osSUFBSSxPQUFPLEdBQUMsTUFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDbkMsa0RBQWtEO1lBQ2xELFdBQVc7WUFDWCxJQUFJLE9BQU8sR0FBQyxNQUFNLE9BQU8sQ0FBQyxJQUFJLEVBQWdCLENBQUM7WUFDL0Msd0NBQXdDO1lBQ3hDLElBQUksV0FBVyxHQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFBLEVBQUUsQ0FBQSxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25ELElBQUksRUFBRSxHQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7WUFDL0MsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUEsRUFBRTtnQkFDbkIsSUFBSSxFQUFFLEdBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDcEMsRUFBRSxDQUFDLFNBQVMsR0FBQyxhQUFhLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDdEMsRUFBRSxhQUFGLEVBQUUsdUJBQUYsRUFBRSxDQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztZQUNGLENBQUMsQ0FBQyxNQUE0QixDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7WUFDOUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQW9CLENBQUMsU0FBUyxHQUFDLEVBQUUsQ0FBQztRQUV6RSxDQUFDO1FBQUMsT0FBTyxLQUFLLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQyxNQUE0QixDQUFDLFFBQVEsR0FBQyxLQUFLLENBQUM7WUFDOUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQW9CLENBQUMsU0FBUyxHQUFDLFFBQVEsQ0FBQztRQUUvRSxDQUFDO0lBQ0wsQ0FBQyxDQUFDLENBQUE7QUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJwYWdlcy9mZXRjaC9mZXRjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFNwb3J0IH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvbW9kZWxzL3Nwb3J0XCI7XHJcbmltcG9ydCB7IFNwb3J0RFRPIH0gZnJvbSBcIi4vc3BvcnQtZHRvXCI7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCgpPT57XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bl9jaGVyY2hlclwiKSEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsYXN5bmMgKGUpPT57XHJcbiAgICAgICAgKGUudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZD10cnVlO1xyXG4gICAgICAgIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Rpdl9tZXNzYWdlXCIpIGFzIEhUTUxEaXZFbGVtZW50KS5pbm5lckhUTUw9XCJFbiBjb3Vyc1wiO1xyXG4gICAgICAgdHJ5IHtcclxuICAgICAgICBsZXQgcmVwb25zZT1hd2FpdCBmZXRjaChcIi9zcG9ydHNcIik7XHJcbiAgICAgICAgLy8gZMOpc8OpcmlhbGlzYXRpb24gZGUgbCdvYmpldCBlbnZvecOpIHBhciBsZSBzZXJ2ZXJcclxuICAgICAgICAvLyArIHR5cGFnZVxyXG4gICAgICAgIGxldCB0YWJsZWF1PWF3YWl0IHJlcG9uc2UuanNvbigpIGFzIFNwb3J0RFRPW107XHJcbiAgICAgICAgLy8gdHJhbnNmb3JtYXRpb24gZW4gcG9jbyA9PiB2YWxpZGF0aW9uIFxyXG4gICAgICAgIGxldCB0YWJsZWF1UG9jbz10YWJsZWF1Lm1hcChlPT5uZXcgU3BvcnQoZS5zLGUubCkpO1xyXG4gICAgICAgIGxldCB1bD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3VsX3Jlc3VsdGF0c1wiKTtcclxuICAgICAgICB0YWJsZWF1UG9jby5mb3JFYWNoKGU9PntcclxuICAgICAgICAgICAgbGV0IGxpPWRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgICAgICAgICAgbGkuaW5uZXJIVE1MPWBMaWJlbGxlIDogJHtlLmxpYmVsbGV9YDtcclxuICAgICAgICAgICAgdWw/LmFwcGVuZChsaSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgKGUudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZD1mYWxzZTtcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXZfbWVzc2FnZVwiKSBhcyBIVE1MRGl2RWxlbWVudCkuaW5uZXJIVE1MPVwiXCI7XHJcbiBcclxuICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgKGUudGFyZ2V0IGFzIEhUTUxCdXR0b25FbGVtZW50KS5kaXNhYmxlZD1mYWxzZTtcclxuICAgICAgICAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNkaXZfbWVzc2FnZVwiKSBhcyBIVE1MRGl2RWxlbWVudCkuaW5uZXJIVE1MPVwiRXJyZXVyXCI7XHJcbiBcclxuICAgICAgIH1cclxuICAgfSlcclxufSk7Il19
