alert("Welcome to KinoPoisk online!");

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

const personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        private: false
};

let lastSeenMovie = prompt("Один из последних просмотренных фильмов?"),
     myRaiting = prompt("Насколько вы оцениваете его??");

// const movies = {
//     name: lastSeenMovie,
//     rate: myRaiting
// };
personalMovieDB.movies[lastSeenMovie] = myRaiting;

console.log(personalMovieDB);
