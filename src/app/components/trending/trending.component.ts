import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { from, Observable } from 'rxjs';




@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css']
})
export class TrendingComponent implements OnInit {
  trendingGifs:any[] =[];

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getTrending()
    .subscribe((response:any)=>{
      //console.log('Data',response);
      this.trendingGifs=response.data;

    })
  }

}
