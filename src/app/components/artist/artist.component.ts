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

  constructor(private activatedRoute: ActivatedRoute, private _spotify: SpotifyService) {
    this.loading = true;
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
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

}
