import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
/*external dependencies*/
import { CovalentLayoutModule, CovalentStepsModule } from '@covalent/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule} from '@angular/material';
import {MdInputModule, MdListModule} from '@angular/material';

/*Routing*/
import {AppRoutingModule} from './routing';
/*views*/
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CovalentLayoutModule,
    CovalentStepsModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdInputModule,
    MdListModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
