// import {writeMovie} from "../components/movieComponent.js"
// import {writeMovie2} from "../components/locationComponents.js"

// Load Location

// const locationPrint = () => {
//   return new Promise((resolve, reject)=> {
//       $.get('../db/locations.json')
//     .done((data) => {
//      resolve( writeMovie2(data.locations)) //
//     })
//     .fail((error) => {
//       console.error(error);
//       reject(error)
//     }); 
//     })
// };

// locationPrint(); 

// const moviePrint = () => {

//   return new Promise((resolve, reject) => {
//       $.get('../db/movie.json')
//         .done((data2) => {
//           resolve(data2)
//       })    
//       .fail((error) => {
//         console.error(error);
//         reject(error)
//       });  
//   })
// }


// const loadLocationsOnMovie = (movie) => {
//     return new Promise((resolve, reject)=> {
//         $.get('../db/locations.json')
//             .done((data) => {
//                 const moviePins = movie.map(discriptions => {
//                     const matchingMovies = data.locations.filter(location =>location.Movie == discriptions.Name);
//                     discriptions.locations = matchingMovies;
//                     return discriptions
//                 })
//                 resolve(moviePins);
//                  //resolve( writeMovie2(data.locations)) //
//       })
//       .fail((error) => {
//         console.error(error);
//         reject(error)
//       }); 
//       })
// };

// const moviePrintCall = () =>{   
//     moviePrint().then((data2) => {
//         return loadLocationsOnMovie(data2)
//     })
//     .then((data2)=>{
//         writeMovie(data2.movie)
//         console.log("done")
//     })
//     .catch((err)=>{
//         console.error(err);
//     });
// };


//ti++;
//if data[i].Movie === data2[i].Name 
//then data[i].
// call and construct data for the new DOM print 

//export {locationPrint,moviePrintCall};