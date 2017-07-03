import { Component } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

import {Artist} from '../../../Artist';

@Component({
    moduleId: module.id,
    selector: 'search',
    templateUrl: 'search.component.html',
})
export class SearchComponent {
    searchStr: string;
    searchRes: any[];
    constructor(private spotifyService: SpotifyService){

    }

    searchMusic() {
        this.spotifyService.searchMusic(this.searchStr).subscribe(res=> {
            this.searchRes = res.artists.items;
            console.log(this.searchRes.length);
        });
        console.log(this.searchStr);
    }
}
