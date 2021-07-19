import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CharactersInfoComponent } from './characters-info/characters-info.component';
import { MatListModule } from '@angular/material/list';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CharactersListComponent,
    CharactersInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
