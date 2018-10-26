import {locationPrint} from "../data/events.js"

//May play with the show() method instead of the hide() below


const hideAll = () => {
  $('.Afternoon').hide();
    $('.Dark').hide();
    $('.Evening').hide();
    $('.Morning').hide();
    locationPrint();
}

$('body').on('click', 'button#all', (e) => {
  // HAVE TO ADD THE OTHER 
    $('.Afternoon').remove();
    $('.Dark').remove();
    $('.Evening').remove();
    $('.Morning').remove();
    locationPrint();
  })

  $('body').on('click', 'button#morning', (e) => {
    $('.Afternoon').remove();
    $('.Dark').remove();
    $('.Evening').remove();
  })

  $('body').on('click', 'button#afternoon', (e) => {
    $('.Morning').remove();
    $('.Dark').remove();
    $('.Evening').remove();
  })

  $('body').on('click', 'button#dark', (e) => {
    $('.Morning').remove();
    $('.Afternoon').remove();
    $('.Evening').remove();
  })
  
  $('body').on('click', 'button#evening', (e) => {
    $('.Morning').remove();
    $('.Afternoon').remove();
    $('.Dark').remove();
  })

  export {hideAll}