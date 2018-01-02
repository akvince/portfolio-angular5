import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {MatToolbarModule,MatSidenavModule} from '@angular/material';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { MenuComponent } from './menu/menu.component';
import { PresentationComponent } from './presentation/presentation.component';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule
  ],
  declarations: [
    AppComponent,
    AppHeaderComponent,
    MenuComponent,
    PresentationComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
