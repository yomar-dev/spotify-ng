import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styles: []
})
export class ArtistComponent implements OnInit {
    artista: any = {};
    loading: boolean;
    topTracks: any[] = [];

    constructor(private activatedRoute: ActivatedRoute, private _spotify: SpotifyService) {
        this.loading = true;
        this.activatedRoute.params.subscribe(params => {
            this.getArtista(params['id']);
            this.getTopTracks(params['id']);
        });
    }

    ngOnInit() {
    }

    getArtista(id: string) {
        this._spotify.getArtista(id)
            .subscribe(artista => {
                this.artista = artista;
                this.loading = false;
            });
    }

    getTopTracks(id: string) {
        this._spotify.getTopTracks(id)
            .subscribe(topTracks => {
                console.log(topTracks);
                this.topTracks = topTracks;
            });
    }

}
