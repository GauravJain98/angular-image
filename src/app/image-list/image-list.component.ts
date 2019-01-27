import { Component, OnInit } from '@angular/core';
import {ImageService } from '../shared/image.service'
import { ImageComponent } from '../image/image.component'
@Component({
  selector: 'app-image-list',
  templateUrl: './image-list.component.html',
  styleUrls: ['./image-list.component.css']
})
export class ImageListComponent implements OnInit {
  images: any[];
  imagesFound = false;
  searching = false;

  constructor(private _imageService: ImageService) { }

  success(data){
    this.searching = false;
    console.log(data);
    this.imagesFound = true;
    this.images = data.hits;
  }
  errorFound(error){
    console.log(error)
  }

  searchImage(query:string){ 
    this.searching = true;
    return this._imageService.getImage(query).subscribe(
      data => this.success(data),
      error => this.errorFound(error),
      () => console.log("Request Completed")
    )
  }

  ngOnInit() {
  }

}
