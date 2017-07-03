import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {
    private searchUrl: string;
    private token: string;

    constructor(private http: Http) {
        this.token = 'Bearer BQALBSOIJTYpoD1MOp0Am_3lPd4XNuOkD6o1iLerIwCWS8Wc4f-stnixsSuUWp7hKVLm6Qv-kg_dBuenx54EUQ';
    }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Authorization', this.token);
    }

    searchMusic(str: string, type = 'artist') {
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this.http.get(this.searchUrl, {headers: headers}).map(res => res.json());
    }
}