
// Exercise 1: Get the movies of all directors.
function getAllDirectors(movies) {  
  let result =  movies.map(movie => movie.director)   
    console.log("ex1", result)
    return result
 }  

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {  
  let result = movies.filter(movie => movie.director === director).map(movie => movie)   
  console.log("ex2", result)   
  return result
  }

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) { 
  let films = movies.filter(movie => movie.director == director).map(movie => movie.score)
  let scoreTotal = movies.filter(movie => movie.director == director).reduce((total, movie) => total + movie.score, 0)  
  let promedio = scoreTotal / films.length 
  console.log(promedio) 
  return promedio 
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  let result4 = movies.map(movie => movie.title).sort().slice(0, 20)

  console.log("ex4 ", result4)
  return result4
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {
  let orden = movies
  .map(movie => movie)
 .sort((a, b) => {   
  return a.year !== b.year ? a.year - b.year : a.title.localeCompare(b.title)  //localeCompare() es un método de JavaScript que se utiliza para comparar cadenas de texto según el orden lexicográfico (alfabético).  
}
)
console.log(orden)
return orden
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, category) {
  let result6 =  movies.filter((movie) => movie.genre.includes(category)).map((movie) => movie.score)

  let sumScores = result6.reduce((total, score) => total + score, 0) 
  let average = sumScores / result6.length

  console.log("EXERCICE 6 ->", average)
  return average
  }    
  
//Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {
let result = movies.map(movie => {
  let [horas, minutos] = movie.duration.split("h")
  let duracionEnMinutos = parseInt(horas) * 60 

 if (minutos) {
  duracionEnMinutos += parseInt(minutos) 
 }

  return {
    ...movie,
    duration: duracionEnMinutos
  }
})
console.log(result)
return result
}

// Exercise 8: Get the best film of a year
let year = 1994
function bestFilmOfYear(movies, year) {
  let result = movies.filter(movie => movie.year === year).sort((a,b) => b.score - a.score).splice(0, 1)
  
  console.log(result)
  return result
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}