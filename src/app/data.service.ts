import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }


  getTrending(){
    return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=jiffyApiKey&q=peace+for+ukraine&limit=1&offset=0&rating=g&lang=en

    `)
  }
}
