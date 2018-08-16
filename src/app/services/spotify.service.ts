import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class SpotifyService {

    constructor(private http: HttpClient) {
        const headers = new HttpHeaders({
            'Authorization': 'Bearer BQAOhP46O9a896KyXJQvRvgA5deCHtvlYXJKpy_Z9yUlGDVUpKIyziMGm79kMMIiz3-FUE8oUkwCEPTUTVk'
        });
        this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=20', { headers })
            .subscribe(data => {
                console.log(data);
            });
    }
}
