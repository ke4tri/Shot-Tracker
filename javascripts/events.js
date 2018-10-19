import {writeMovie} from "../javascripts/components/movieComponent.js"
import {writeMovie2} from "../javascripts/components/locationComponents.js"

// Load Location
$.get('../db/locations.json')
.done((data) => {
  writeMovie2(data.locations)
})
.fail((error) => {
  console.error(error);
}); 

// Load Movie
$.get('../db/movie.json')
.done((data2) => {
  writeMovie(data2.movie);
})
.fail((error) => {
  console.error(error);
}); 

