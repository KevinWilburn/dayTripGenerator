let destination=["Miami","Chicago","Arizona"];
let restaurant=["Chiptole","Olive Garden", "Buffalo Wild Wings"];
let transportation=["Plane","Train","Car"];
let entertainment=["Beach day","Baseball game","Hiking"];

function findRandomFromCollection(array){
      let randomItem = array[Math.floor(Math.random() * array.length)];
    return randomItem;
}

let randomItemFromDestination = findRandomFromCollection(destination);
let randomItemFromRestaurant = findRandomFromCollection(restaurant);
let randomItemFromTransportation = findRandomFromCollection(transportation);
let randomItemFromEntertainment= findRandomFromCollection(entertainment);



console.log(randomItemFromDestination);
console.log(randomItemFromRestaurant);
console.log(randomItemFromTransportation);
console.log(randomItemFromEntertainment);


let alertUserInternery= alert(randomItemFromDestination + ", " + randomItemFromRestaurant + ", " + randomItemFromEntertainment + ", " + randomItemFromTransportation + " is your itinerary.")
let questionToUser= prompt("Do you like this itinerary? Yes or no?")
while(questionToUser === "Yes"){
    alert("Okay great! Thanks for choosing us for all of your travel needs!");
    break;
}