

// Load Location
$.get('../db/locations.json')
.done((data) => {
  console.log(data);
//   writeFishes(data.locations);
//   applySale();
})
.fail((error) => {
  console.error(error);
}); 

// Load Movie
$.get('../db/movie.json')
.done((data2) => {
  console.log(data2);
})
.fail((error) => {
  console.error(error);
}); 