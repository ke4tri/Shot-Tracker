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

// const moviePrintCall = () =>{   
//   moviePrint()
//     .then((data2)=>{
//       writeMovie(data2.movie)
//       console.log("done")
//   })
//   .catch((err)=>{
//       console.error(err);
//   });
// };

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

const moviePrintCall = () =>{   
    moviePrint().then((data2)=>{

    })
    .then((data2)=>{
        writeMovie(data2.movie)
        console.log("done")
    })
    .catch((err)=>{
        console.error(err);
    });
};


//ti++;
//if data[i].Movie === data2[i].Name 
//then data[i].
// call and construct data for the new DOM print 

export {locationPrint,moviePrintCall};