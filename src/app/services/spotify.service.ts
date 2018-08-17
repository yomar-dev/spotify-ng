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
            'Authorization': 'Bearer BQAG8xGnMT2NZ950qCFva9x42o3H6mFrPs9Lbe2dKmaWdLXUqWaVeTm9EXhT2JF3R-1LWliTKu3P8_s6G1g'
        });
        return this.http.get(url, { headers });
    }

    getNewReleases() {
        return this.getQuery('browse/new-releases?limit=20').pipe(map( (data: any) => data.albums.items ));
    }

    getArtista(termino: string) {
        return this.getQuery(`search?q=${termino}&type=artist&limit=20`).pipe(map( (data: any) => data.artists.items ));
    }
}
