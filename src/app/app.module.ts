import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {HttpClientModule} from '@angular/common/http';
//import SearchIcon from '@mui/icons-material/Search';
//import MoreVertIcon from '@mui/icons-material/MoreVert';
//import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './components/body/body.component';
import { TrendingComponent } from './components/trending/trending.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArtistsComponent } from './components/artists/artists.component';
import { ClipsComponent } from './components/clips/clips.component';
import { StoriesComponent } from './components/stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    BodyComponent,
    TrendingComponent,
    NavbarComponent,
    ArtistsComponent,
    ClipsComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
