

// Add fish to "Basket"
const writeMovie = (arrayOfMovie) => {
    let domString = '';
    arrayOfMovie.forEach((movie) => {
      domString += `
      <div class="movieClass col-md-6 col-md-offset-3">
      <div class="thumbnail">
          <div class="caption">
              <h6 id="name1">Name : ${movie.Name}</h6>
              <h6 id="genre1">Genre : ${movie.Genre}</h6>
              <h6 id="date1">Date Release : ${movie.Name}</h6>
              <h6 id="description1">Description : ${movie.Description}</h6>
        </div>
        <button class="Morning btn btn-danger" id="morning">Morning</button>
        <button class="Afternoon btn btn-danger" id="afternoon">Afternoon</button>
        <button class="Evening btn btn-danger" id="evening">Evening</button>
        <button class="Dark btn btn-danger" id="dark">After Dark</button>
        </div>
  </div>
      `
    })
    $("#movieLine").append(domString);
};


export {writeMovie}