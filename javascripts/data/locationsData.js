import {locationPrint} from "../data/events.js"

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

  export {hideAll}