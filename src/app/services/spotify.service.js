"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var SpotifyService = (function () {
    function SpotifyService(http) {
        this.http = http;
        this.token = 'Bearer BQALBSOIJTYpoD1MOp0Am_3lPd4XNuOkD6o1iLerIwCWS8Wc4f-stnixsSuUWp7hKVLm6Qv-kg_dBuenx54EUQ';
    }
    SpotifyService.prototype.createAuthorizationHeader = function (headers) {
        headers.append('Authorization', this.token);
    };
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        var headers = new http_1.Headers();
        this.createAuthorizationHeader(headers);
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this.http.get(this.searchUrl, { headers: headers }).map(function (res) { return res.json(); });
    };
    SpotifyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map