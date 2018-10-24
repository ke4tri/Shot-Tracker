import {locationPrint} from "../data/events.js"

//NEED TO MAKE THE BELOW ONE FUNCTION THAT IS CALLED
//BASED OFF OF THE ID VALUE OF THE E.TARGET
//COULD JUST PASS THE E.ID FROM E TO THE FUNCTION AS A PARAMETER?

$('body').on('click', 'button#all', (e) => {
  // HAVE TO ADD THE OTHER 
    locationPrint();
  })

  $('body').on('click', 'button#morning', (e) => {
    $('.Afternoon').hide();
    $('.Dark').hide();
    $('.Evening').hide();
  })

  $('body').on('click', 'button#afternoon', (e) => {
    $('.Morning').hide();
    $('.Dark').hide();
    $('.Evening').hide();
  })

  $('body').on('click', 'button#dark', (e) => {
    $('.Morning').hide();
    $('.Afternoon').hide();
    $('.Evening').hide();
  })
  
  $('body').on('click', 'button#evening', (e) => {
    $('.Morning').hide();
    $('.Afternoon').hide();
    $('.Dark').hide();
  })