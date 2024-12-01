import { MUSIC_API_KEY } from "@/env";

const API_BASE_URL = `https://osdb-api.confidence.sh/rest/${MUSIC_API_KEY}`;

export const searchSongs = async (songName: string, results: number = 20) => {
    const response = await fetch(`${API_BASE_URL}/search/song?query=${songName}&limit=${results}`);
        if (!response.ok) {
            throw new Error("Failed to fetch songs");
        }
        return response.json();
}

export const searchArtists = async (artistName: string, results: number = 20) => {
    const response = await fetch(`${API_BASE_URL}/search/artist?query=${artistName}&limit=${results}`);
        if (!response.ok) {
            throw new Error("Failed to fetch artists");
        }
        return response.json();
}

export const searchAlbums = async (albumName: string, results: number = 20) => {
    const response = await fetch(`${API_BASE_URL}/search/album?query=${albumName}&limit=${results}`);
    if (!response.ok) {
        throw new Error("Failed to fetch albums");
    }
    return response.json();
}