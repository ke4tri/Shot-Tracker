import {writeMovie} from "../components/movieComponent.js"
import {writeMovie2} from "../components/locationComponents.js"

// Load Location
const locationPrint = () => {
  return new Promise((resolve, reject)=> {
      $.get('../db/locations.json')
    .done((data) => {
     resolve( writeMovie2(data.locations)) //
     
    })
    .fail((error) => {
      console.error(error);
      reject(error)
    }); 
    })
};

locationPrint(); //instead of calling it here put it in a Promise as another .js file

const moviePrint = () => {
  return new Promise((resolve, reject) => {
      $.get('../db/movie.json')
        .done((data2) => {
          resolve(data2)
      })    
      .fail((error) => {
        console.error(error);
        reject(error)
      });  
  })
}

const loadLocationsOnMovie = (movie) => {
    return new Promise((resolve, reject)=> {
        $.get('../db/locations.json')
            .done((data) => {
                const moviePins = movie.map(movie1 => {
                    const matchingLocations = data.locations.filter(location =>location.Movie == movie1.Name);
                    movie1.locations = matchingLocations;
                    return movie1
                })
                resolve(moviePins);
                 //resolve( writeMovie2(data.locations)) //
      })
      .fail((error) => {
        console.error(error);
        reject(error)
      }); 
      })
};

const moviePrintCall = () =>{   
    moviePrint().then((data2) => {
        return loadLocationsOnMovie(data2.movie)
    })
    .then((moviePins)=>{
        writeMovie(moviePins)
        console.log("done")
    })
    .catch((err)=>{
        console.error(err);
    });
};


export {locationPrint,moviePrintCall};