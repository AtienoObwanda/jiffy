import { Component, OnDestroy, OnInit } from '@angular/core';
import { subscribeOn, Subscription } from 'rxjs';
import { from, Observable } from 'rxjs';
import { DataService } from 'src/app/data.service';



@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
 giphyArtists :any[] =[];
  subscription: Subscription = new Subscription;

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
    this.subscription= this.dataService.getArtists();
    this.dataService.getGifs()
    .subscribe((response:any)=>{
    this.giphyArtists=response;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

}
