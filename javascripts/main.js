import {moviePrintCall} from '../javascripts/data/events.js'
//import {inputListen} from '../javascripts/data/movieData.js'
import {rePrintLocations} from '../javascripts/data/locationsData.js'

const initializeApp = () => {
    moviePrintCall();
    // inputListen();
    rePrintLocations();
}

initializeApp();