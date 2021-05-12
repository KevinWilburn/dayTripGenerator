let destination=["Miami","Chicago","Arizona"];
let restaurant=["Chiptole","Olive Garden", "Buffalo Wild Wings"];
let transportation=["Plane","Train","Car"];
let entertainment=["Beach day","Baseball game","Hiking"];

function findRandomFromCollection(array){
      let randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}
function reRandomizing(destArray, restArray,transArray, entArray){

    let randomItemFromDestination = findRandomFromCollection(destArray);
    let randomItemFromRestaurant = findRandomFromCollection(restArray);
    let randomItemFromTransportation = findRandomFromCollection(transArray);
    let randomItemFromEntertainment= findRandomFromCollection(entArray);

    let randomResultTripDetailsArray=[randomItemFromDestination, randomItemFromRestaurant,randomItemFromTransportation,randomItemFromEntertainment];
    return randomResultTripDetailsArray;
}

let randomizingIntinerary = reRandomizing(destination, restaurant,transportation,entertainment);

console.log(randomizingIntinerary);

let alertUserInternery= alert(randomizingIntinerary + " is your itinerary.");


