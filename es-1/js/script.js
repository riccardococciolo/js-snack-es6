const bike = [
{
    name: "yellow",
    weight: 10,
},
{
    name: "green",
    weight: 16,
},
{
    name: "red",
    weight: 8,
}];

console.log(bike);

let lightestBike = bike[0];

bike.forEach(curBike => {
    const {name, weight} = curBike;
    console.log(curBike, name);
    weight < lightestBike.weight ? lightestBike = curBike : "";
});

console.log(lightestBike);

let message = `La bici ${lightestBike.name} é la più leggera con ${lightestBike.weight}kg.`;

document.getElementById("bikeMessage").innerHTML = message;

