import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './wrapper/wrapper.component';
import { PostbelowComponent } from './wrapper/postbelow/postbelow.component';
import { ContentComponent } from './wrapper/content/content.component';
import { HeaderComponent } from './wrapper/header/header.component';
import {ServiceService} from "./service/service.service";

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,
    HeaderComponent,
    WrapperComponent,
    PostbelowComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
