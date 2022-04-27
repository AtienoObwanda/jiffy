import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  gifs = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }


  getTrending(){
      return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=${environment.giphyApiKey}&limit=50`)

    //return this.http.get(`https://api.giphy.com/v1/gifs/trending?api_key=fpNzP9W7ZjmAWuLdgCAxd9xVVeXltGqL&limit=50&rating=g`)
    .subscribe((response:any)=>{
      this.gifs.next(response.data);

    });
  }
  
  searchGifs(gifName: string){
  //return this.http.get(`https://api.giphy.com/v1/gifs/search?q=&{gifName}&api_key=fpNzP9W7ZjmAWuLdgCAxd9xVVeXltGqL&limit=50`)
  return this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${environment.giphyApiKey}&q=${gifName}&limit=50`)
    .subscribe((response:any)=>{
      this.gifs.next(response.data);

    });
    
  }

  getGifs(){
    return this.gifs.asObservable();
  }


getArtists(){
  return this.http.get(`https://api.giphy.com/v1/gifs/artists?api_key=fpNzP9W7ZjmAWuLdgCAxd9xVVeXltGqL&limit=50&rating=g`)
  .subscribe((response:any)=>{
    this.gifs.next(response.data);
  })
}

}
