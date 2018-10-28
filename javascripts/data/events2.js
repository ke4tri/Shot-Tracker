import {moviePrint,loadLocationsOnMovie,locationPrint} from "../data/events.js"

const locationPrint2 = (locationCard,passEvent2) => {
    locationCard.forEach(location => { 
        let domString = ''; 
        if(location.Movie === passEvent2){  
                domString += `<div id="divWrap" class="divWrapper delete ${location.TimeOfDay}">
                        <div class="${location.TimeOfDay} delete "
                        <div class="thumbnail">
                            <img src="${location.Image}"
                                alt="" width="100%">
                            <div class="caption mb-5">
                                <h4 id="nameId" class="centerText">Shot logged as: ${location.Name}</h4>
                                <h6 class="address centerText" Location of Shot: >${location.Address}</h6>
                                <h6 class="time centerText">Time For Shot: ${location.Time}</h6>
                                <h6 class="light centerText">Light of Day: ${location.TimeOfDay}</h6>
                                <div class="caption card-footer mb-5 centerText">
                                    </div>
                            </div>
                        </div>
                    </div>
                    </div>`
        }
        $("#newLocationDom").append(domString);
    }) 
};

//event.currentTarget.lastElementChild.lastElementChild.childNodes[3].id.value
//const clickedBoardId = $(e.target).closest('.board-card').attr('id')
const writeMovie2 = (arrayOfMovie,newEvent) => {
  let domString = '';
  arrayOfMovie.forEach((movie) => {
       if(movie.Name === newEvent) {
    let movieLocationName = `${movie.Name}`;
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
    //return movieLocationName;
    return newEvent
       }
  })

  $("#newMovieDom").append(domString); //CHANGE FROM .APPEND TO .HTML
  newLocationCards(newEvent);
};

//// isolating the event listiner to push into locaion /////
// const passingEvent = (event) => {

// };

/////// gets info for movie cards builder ////////
const moviePrintCall2 = (event) =>{   
    const newEvent = event.currentTarget.lastElementChild.lastElementChild.childNodes[3].innerText
    //passingEvent(event);
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

const locationPrint5 = () => {
    return new Promise((resolve, reject)=> {
        $.get('../db/locations.json')
      .done((data) => {
       resolve(data) //
      })
      .fail((error) => {
        console.error(error);
        reject(error)
      }); 
      })
  };
////// gets info for location card builders /////
const newLocationCards = (passEvent) =>{   
    locationPrint5().then((data) => {
        locationPrint2(data.locations,passEvent);
        //console.log(data + passEvent + " This works")
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

  