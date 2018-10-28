import {inputListen} from "../data/movieData.js"

const writeMovie2 = (arrayOfMovie) => {
    let domString = '';
    arrayOfMovie.forEach((location) => {
        domString += `
         <div id="divWrap" class="divWrapper delete ${location.TimeOfDay}">
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
  </div>
      `
    })
    $("#available").html(domString);
     inputListen();
};

export{writeMovie2}