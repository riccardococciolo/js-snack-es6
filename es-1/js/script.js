const bike = [
{
    nome: "yellow",
    peso: 10,
},
{
    nome: "green",
    peso: 16,
},
{
    nome: "red",
    peso: 8,
}];

console.log(bike);

bike.forEach(curBike => {
    const {nome, peso} = curBike;
    console.log(curBike, nome);
});

