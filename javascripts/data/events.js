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
          resolve(writeMovie(data2.movie))
      })    
      .fail((error) => {
        console.error(error);
        reject(error)
      });  
  })
}

// call this on the main.js as the initalizer
const moviePrintCall = () =>{   
    moviePrint()
      .then((data2)=>{
        console.log("done")
    })
    .catch((err)=>{
        console.error(err);
    });
};

export {moviePrintCall}







export {locationPrint};