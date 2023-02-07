class movie {
    constructor(movie = '', studio = '', rating = 'PG') {
        this.name = movie;
        this.studio = studio;
        this.rating = rating;
    }
    getPG(movies = [], rating = ''){
    return movies.filter((m) => m.rating === rating);
}
}
const casinoroyal = new movie('Casino Royal', 'Eon Productions', 'PG13');
const leo = new movie('Leo', 'seven studio', 'PG');
const vikram = new movie('Vikram', 'RKF', 'PG');
const thunivu = new movie('Thunivu', 'seven studio', 'PG13');
const master = new movie('Master', 'EROS International', 'PG');
const justiceleague = new movie('Justice League', 'Legendary', 'R');
const ironman = new movie('Iron Man', 'EROS', 'R');

const moviesarray = [casinoroyal, leo, vikram, thunivu, master, justiceleague, ironman];

console.log(casinoroyal.getPG(moviesarray, 'PG'));
//output : [{
//   name: "Leo",
//   rating: "PG",
//   studio: "seven studio"
// }, {
//   name: "Vikram",
//   rating: "PG",
//   studio: "RKF"
// }, {
//   name: "Master",
//   rating: "PG",
//   studio: "EROS International"
// }]
