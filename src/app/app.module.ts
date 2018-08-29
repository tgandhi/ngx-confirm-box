import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import{ NgxConfirmBoxModule, NgxConfirmBoxService} from 'ngx-confirm-box';
import {NgxConfirmBoxModule} from '../../projects/ngx-confirm-box/src/public_api';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxConfirmBoxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
