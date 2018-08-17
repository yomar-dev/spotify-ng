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
            'Authorization': 'Bearer BQAEZAUl6vTomlMfPUouYB-JSulXPhgsBEX6dKgxSkoPT1iOYHiTa21J32K3KCWwSkVDuJsaLlin5FbGnfQ'
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
