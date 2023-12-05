import {Component, OnInit} from '@angular/core';
import {marsImage} from "../../service/marsImage-repository.service";
import {MarsimagesService} from "../../service/marsimages.service";

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit{
  marsImageResult: marsImage[] = [];

  constructor(private marsService: MarsimagesService) {
  }

  ngOnInit() {
    this.reload()
  }


  public reload(){
    this.marsService.getImages().subscribe(
      (images) => {
        this.marsImageResult = images.photos;
        for (let i = 0; i < images.photos.length; i++) {
          // this.createImage(images.photos[i].img_src)

        }
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );
  }
  // private createImage(imageURL: string) {
  //   let imageBox = document.createElement('div');
  //   let imageElement = document.createElement('img');
  //   let imageDiv = document.getElementById("image-gox-box");
  //
  //   imageElement.src = imageURL;
  //
  //   imageElement.classList.add("ImageElement");
  //   imageBox.appendChild(imageElement);
  //
  //   if(imageDiv !== null){
  //     imageBox.classList.add("ImageBox");
  //     imageDiv.appendChild(imageElement);
  //   }
  // }

}
