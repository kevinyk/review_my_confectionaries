import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CakesListComponent } from './cakes-list/cakes-list.component';
import { CakesShowComponent } from './cakes-show/cakes-show.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { HttpService } from './http.service';
import { CakesReviewComponent } from './cakes-review/cakes-review.component';


@NgModule({
  declarations: [
    AppComponent,
    CakesListComponent,
    CakesShowComponent,
    CakesReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
