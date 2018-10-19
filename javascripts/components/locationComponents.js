

// Add fish to "Basket"
const writeMovie2 = (arrayOfMovie) => {
    let domString = '';
    arrayOfMovie.forEach((location) => {
        domString += `
        <div class="col"
        <div class="thumbnail">
            <img src="${location.Image}"
                alt="" width="40%">
            <div class="caption">
                <h3 id="thumbnail-label">${location.Name}</h3>
                <p>
                    <span class="price">${location.Address}</span>
                </p>
            </div>
          <div class="caption card-footer">
              <button class="add btn btn-danger">Add To Basket</button>
          </div>
      </div>
  </div>
      `
    })
    $("#available").append(domString);
};


export {writeMovie2}