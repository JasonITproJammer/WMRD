import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { RouterModule, Routes } from "@angular/router";
import { MediaComponent } from './media/media.component';
import { DonateComponent } from './donate/donate.component';
import { JoinComponent } from './join/join.component';
import { PlayersComponent } from './players/players.component';

const APP_ROUTES : Routes = [
  { path: '', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'media', component: MediaComponent },
  { path: 'donate', component: DonateComponent },
  { path: 'join', component: JoinComponent },
  { path: 'players', component: PlayersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EventsComponent,
    MediaComponent,
    DonateComponent,
    JoinComponent,
    PlayersComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
