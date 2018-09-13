import {combineReducers} from 'redux'
import albumsReducer from "./albumsReducer"
import tracks from "./tracks"
import playlist from "./playlist"

const rootReducer = combineReducers({
    albums: albumsReducer
    // tracks,
    // playlist
})
export default rootReducer
