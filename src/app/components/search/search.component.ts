import { Component, OnInit,Directive } from '@angular/core';
import { DataService } from 'src/app/data.service';



@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  search(searchTerm:string){
    if(searchTerm !=='')
    {
      this.dataService.searchGifs(searchTerm)
     
    }
  }
}
