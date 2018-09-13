import {ALBUMS_EDIT, ALBUMS_LOADED} from "./types"
import {ALBUMS_DELETE} from"./types"
import {ALBUMS_ADD} from "./types";
import axios from 'axios'

export const loadAlbums = () => dispatch => {
    fetch('http://localhost:8080/api/albums')
        .then(res => res.json())
        .then(data => dispatch({type:ALBUMS_LOADED, payload: data}))
}

export const deleteAlbum = (id) => dispatch => {
    axios.delete(`http://localhost:8080/api/albums/${id}`)
        .then(data => dispatch({type:ALBUMS_DELETE, payload: id}))
        .catch(data => dispatch({type:ALBUMS_DELETE, payload: id}))
}

export const addAlbum = (album_name, album_cover) => dispatch => {
    axios.post(`http://localhost:8080/api/albums/create`,{album_name, album_cover})
        .then(res => res.data)
        .then(data => dispatch({type:ALBUMS_ADD, payload: album_name, album_cover}))

}

export const editAlbum = (id) => dispatch => {
    axios.put(`http://localhost:8080/api/albums/${id}`)
        .then(data => dispatch({type:ALBUMS_EDIT, payload: id}))
        .catch(data => dispatch({type:ALBUMS_EDIT, payload: id}))
}

// export function addAlbum(album_name) {
//     return {
//         type: ALBUMS_ADD,
//         album_name
//
//     };
// }
