import {writeMovie} from "../components/movieComponent.js"
import {writeMovie2} from "../components/locationComponents.js"

// Load Location

const locationPrint = () => {
  $.get('../db/locations.json')
.done((data) => {
  writeMovie2(data.locations)
})
.fail((error) => {
  console.error(error);
}); 
}

locationPrint();
// Load Movie
$.get('../db/movie.json')
.done((data2) => {
  writeMovie(data2.movie);
})
.fail((error) => {
  console.error(error);
}); 

export {locationPrint};