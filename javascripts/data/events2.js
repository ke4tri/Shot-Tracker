import {moviePrint,loadLocationsOnMovie} from "../data/events.js"

//event.currentTarget.lastElementChild.lastElementChild.childNodes[3].id.value
//const clickedBoardId = $(e.target).closest('.board-card').attr('id')
const writeMovie2 = (arrayOfMovie,newEvent) => {
  let domString = '';
  arrayOfMovie.forEach((movie) => {
       if(movie.Name === newEvent)
    domString += `
    <div class="movieClass">
        <div class="thumbnail">
            <div class="caption justify-content-center">
                <img src="${movie.Image}" alt="${movie.Name}" height="auto" width="193">
                <h6 id="name1">${movie.Name}</h6>
                <h6 id="genre1">Genre : ${movie.Genre}</h6>
                <h6 id="date1">Date Release : ${movie.Name}</h6>
                <h6 id="description1">Description : ${movie.Description}</h6>
                <h7 id="locations"> Locations: ${movie.locations.length}</h7>
            </div>
        </div>
    </div>`
  })
 // writeMovie3()
  $("#newMovieDom").append(domString); //CHANGE FROM .APPEND TO .HTML
};

const moviePrintCall2 = (event) =>{   
    const newEvent = event.currentTarget.lastElementChild.lastElementChild.childNodes[3].innerText

  moviePrint().then((data2) => {
      return loadLocationsOnMovie(data2.movie)
  })
  .then((moviePins)=>{
      writeMovie2(moviePins,newEvent) //SHOULD IMPORT FROM THE RETURN OF THE FUNC
  })
  .catch((error)=>{
      console.error(error);
  });
};

//THIS WILL BE BUILDING MY EVENTS FOR THE NEW DOM 
$('body').on('click', '.movieClass', (event) => {
  $('#oldWrappingDiv').remove();
  moviePrintCall2(event);
  

  })
