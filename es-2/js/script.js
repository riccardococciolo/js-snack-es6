const teams = [
    {
        nome : "Juventus",
        falliSubiti : 0,
        puntiFatti : 0,
    },
    {
        nome : "Milan",
        falliSubiti : 0,
        puntiFatti : 0,
    },
    {
        nome : "Inter",
        falliSubiti : 0,
        puntiFatti : 0,
    },
];

console.log(teams);

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

teams.forEach(curTeam => {
    // let {falliSubiti, puntiFatti} = curTeam;
    curTeam.falliSubiti = randomNumber(0, 100);
    curTeam.puntiFatti = randomNumber(0, 100);
    // console.log(falliSubiti, puntiFatti);
});

console.log(teams);

const newTeam = teams.map(team => ({
    falliSubiti: team.falliSubiti,
    puntiFatti: team.puntiFatti,
}));

console.log(newTeam);