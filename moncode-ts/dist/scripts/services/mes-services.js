// Création d'une fonction async avec promise
// et résultat de type GeolocationCoordinates
export function getPositionAsync() {
    return new Promise((resolve, reject) => {
        // ici, écriture du code asynchrone
        navigator.geolocation.getCurrentPosition(
        // En cas de succes
        (position) => {
            resolve(position.coords);
        }, 
        // en cas d'erreur
        (err) => {
            reject(new Error("La position n'a pas pu être calculée"));
        });
    });
}

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNjcmlwdHMvc2VydmljZXMvbWVzLXNlcnZpY2VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3Qyw2Q0FBNkM7QUFDN0MsTUFBTSxVQUFVLGdCQUFnQjtJQUM1QixPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFDLE1BQU0sRUFBQyxFQUFFO1FBQ2pDLG1DQUFtQztRQUMvQixTQUFTLENBQUMsV0FBVyxDQUFDLGtCQUFrQjtRQUN4QyxtQkFBbUI7UUFDbkIsQ0FBQyxRQUFRLEVBQUMsRUFBRTtZQUNSLE9BQU8sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0IsQ0FBQztRQUNELGtCQUFrQjtRQUNsQixDQUFDLEdBQUcsRUFBQyxFQUFFO1lBQ0gsTUFBTSxDQUFDLElBQUksS0FBSyxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQTtRQUM3RCxDQUFDLENBQ0osQ0FBQztJQUNOLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQyIsImZpbGUiOiJzY3JpcHRzL3NlcnZpY2VzL21lcy1zZXJ2aWNlcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIENyw6lhdGlvbiBkJ3VuZSBmb25jdGlvbiBhc3luYyBhdmVjIHByb21pc2VcclxuLy8gZXQgcsOpc3VsdGF0IGRlIHR5cGUgR2VvbG9jYXRpb25Db29yZGluYXRlc1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UG9zaXRpb25Bc3luYygpIDogUHJvbWlzZTxHZW9sb2NhdGlvbkNvb3JkaW5hdGVzPntcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSxyZWplY3QpPT57XHJcbiAgICAgICAgLy8gaWNpLCDDqWNyaXR1cmUgZHUgY29kZSBhc3luY2hyb25lXHJcbiAgICAgICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oXHJcbiAgICAgICAgICAgIC8vIEVuIGNhcyBkZSBzdWNjZXNcclxuICAgICAgICAgICAgKHBvc2l0aW9uKT0+e1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShwb3NpdGlvbi5jb29yZHMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyBlbiBjYXMgZCdlcnJldXJcclxuICAgICAgICAgICAgKGVycik9PntcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoXCJMYSBwb3NpdGlvbiBuJ2EgcGFzIHB1IMOqdHJlIGNhbGN1bMOpZVwiKSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICB9KVxyXG59Il19
