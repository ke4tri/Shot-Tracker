
const writeMovie3 = () => {
   let domString = `<div class="text-center mt-4">
<button class="btn btn-danger" id="morning">Morning</button>
<button class="btn btn-danger" id="afternoon">Afternoon</button>
<button class="btn btn-danger" id="evening">Evening</button>
<button class="btn btn-danger" id="dark">After Dark</button>
<button class="btn btn-danger" id="all">Print All</button>
</div>
<div class="input-group justify-content-center mt-4 mb-4">
    <input type="text" id="myInput" class=" col-4 form-control mx-sm-3 " placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
</div>
`
$("#movieLine2").html(domString);
}

const writeMovie = (arrayOfMovie) => {
    let domString = '';
    arrayOfMovie.forEach((movie) => {
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
    writeMovie3()
    $("#movieLine").append(domString);
};

export {writeMovie}