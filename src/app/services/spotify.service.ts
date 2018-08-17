import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {}

    getQuery(query: string){
        const url = `https://api.spotify.com/v1/${query}`;
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQAEs_vyyQX5SonjKXCdi7Vsz7WikcxiHyxHt1CBE5OPurrlbmHVen_vV9Zz7a0bJGIMfF_Y_Q8lA2kLmlA'
        });
        return this.http.get(url, { headers });
    }

    getNewReleases() {
        return this.getQuery('browse/new-releases?limit=20').pipe(map( (data: any) => data.albums.items ));
    }

    getArtistas(termino: string) {
        return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map( (data: any) => data.artists.items ));
    }

    getArtista(id: string) {
        return this.getQuery(`artists/${id}`); // .pipe(map( (data: any) => data ));
    }

    getTopTracks(id: string) {
        return this.getQuery(`artists/${id}/top-tracks?country=us`).pipe(map( (data: any) => data.tracks ));
    }
}
