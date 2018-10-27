import {moviePrintCall} from '../javascripts/data/events.js'
import {rePrintLocations} from '../javascripts/data/locationsData.js'

const initializeApp = () => {
    moviePrintCall();
    rePrintLocations();
}

initializeApp();