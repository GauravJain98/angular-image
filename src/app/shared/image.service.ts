import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient,HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class ImageService{
    private query:string;
    private API_KEY = environment.PIXABAY_API_KEY;
    private API_URL = environment.PIXABAY_API_URL;
    private URL = this.API_URL + this.API_KEY + "&q=";
    private perPage = "&per_page=10";
    constructor(private _http:HttpClient){
    }

    getImage(query){
        return this._http.get(this.URL+query+this.perPage)
    }
}