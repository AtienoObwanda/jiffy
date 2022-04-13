import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getTrending(){
    return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=fpNzP9W7ZjmAWuLdgCAxd9xVVeXltGqL&limit=50&rating=g`);
    //return this.http.get(`https://api.giphy.com/v1/gifs/trending?
    //api_key=%&{environment.giphyApiKey}&limit=50&rating=g`)
  }
}
