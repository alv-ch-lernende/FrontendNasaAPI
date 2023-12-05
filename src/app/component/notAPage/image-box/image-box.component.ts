import { Component } from '@angular/core';
import {marsImage} from "../../service/marsImage-repository.service";
import {MarsimagesService} from "../../service/marsimages.service";

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent {
  marsImageResult: marsImage[] = [];

  constructor(private marsService: MarsimagesService) {
  }

  ngOnInit() {
    this.reload()
  }

  public createImage(imageURL: string){

    const imageBox = document.createElement('div');
    const imageElement = document.createElement('img');
    let imageDiv = document.getElementById("image-gox-box")
    imageElement.src = imageURL;
    imageBox.appendChild(imageElement);

  }

  public reload(){
    this.marsService.getImages().subscribe(
      (images) => {
        this.marsImageResult = images.photos;
        for (let i = 0; i < images.photos.length; i++) {
          console.log(images.photos[i].img_src)
        }
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );
  }


}
