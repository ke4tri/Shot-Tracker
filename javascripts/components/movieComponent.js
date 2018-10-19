

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
              <h6 id="description1">Description : ${movie.Genre}</h6>
          </div>
          <div class="caption card-footer">
              <button class="add btn btn-danger">Add To Basket</button>
          </div>
      </div>
  </div>
      `
    })
    $("#movieLine").append(domString);
};


export {writeMovie}