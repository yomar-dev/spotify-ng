import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {}

    getNewReleases() {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQC8VZs6yXLW5MgRb6XioHV3FHShCG2esufJHl63Gf4KiiRsjq3qGXbxaLkTP4uArTZP98DO7_B45bbcArI'
        });
        return this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers });
    }
}
