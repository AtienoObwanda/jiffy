import { Component, OnDestroy, OnInit } from '@angular/core';
import { subscribeOn, Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { from, Observable } from 'rxjs';




@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit, OnDestroy {
  trendingGifs:any[] =[];
  subscription: Subscription = new Subscription;

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
   this.subscription= this.dataService.getTrending();
    this.dataService.getGifs()
    .subscribe((response:any)=>{
    this.trendingGifs=response;
    });
    
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe
  }

}
