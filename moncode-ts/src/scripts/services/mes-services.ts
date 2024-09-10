// Création d'une fonction async avec promise
// et résultat de type GeolocationCoordinates
export function getPositionAsync() : Promise<GeolocationCoordinates>{
    return new Promise((resolve,reject)=>{
        // ici, écriture du code asynchrone
            navigator.geolocation.getCurrentPosition(
            // En cas de succes
            (position)=>{
                resolve(position.coords);
            },
            // en cas d'erreur
            (err)=>{
                reject(new Error("La position n'a pas pu être calculée"))
            }
        );
    })
}