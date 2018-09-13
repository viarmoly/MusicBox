import {SET_ALBUM} from "./types";


function handleResponse(response) {
    if(response.ok) {
        return response.json();
    } else {
        let error = new Error(response.statusText);
        error.response = response;
        throw error;
    }
}

export function setAlbums(albums) {
    return {
        type: SET_ALBUM,
        albums
    }
}

export function fetchAlbums() {
    return dispatch => {
        fetch('/admin/albums')
            .then(res => res.json())
            .then(data => dispatch(setAlbums(data.albums)));
    }
}

export function saveAlbum(data) {
    return dispatch => {
        return fetch('/admin/albums/create', {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(handleResponse);
    }
}