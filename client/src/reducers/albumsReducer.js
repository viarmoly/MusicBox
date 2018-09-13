import {ALBUM_CREATED, ALBUMS_ADD, ALBUMS_DELETE, ALBUMS_LOADED} from "../actions/types"

const initialState = [
    // {album_id:1, album_name:"Californication", album_cover:"COVER"},
    // {album_id:2, album_name:"Documentary", album_cover:"COVER"},
    // {album_id:3, album_name:"444", album_cover:"COVER"}
];

function albumsReducer(state = initialState, action){
    console.log(action)
    switch(action.type) {
        case ALBUMS_LOADED:
            return [...action.payload];
        case ALBUM_CREATED:
            return [...action.payload];
        case ALBUMS_ADD:
            return [...state, action.payload];
        case ALBUMS_DELETE:
            return state.filter(album =>
            album.album_id !== action.payload);
        default:return state;
    }
}

export default albumsReducer