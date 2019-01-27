import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageListComponent } from './image-list/image-list.component';

import { ImageService } from "./shared/image.service";
import { HttpClientModule } from  '@angular/common/http';
import { ImageComponent } from './image/image.component';

import { MatCardModule,MatInputModule,MatProgressBarModule } from '@angular/material';
import { MasonryModule } from 'angular2-masonry';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ImageListComponent,
    ImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    MasonryModule,
    MatCardModule,
    MatInputModule,
    MatProgressBarModule,
    BrowserAnimationsModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
