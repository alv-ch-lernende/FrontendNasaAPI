import {Component, OnInit} from '@angular/core';
import {allMarsImages, marsImage} from "../../service/marsImage-repository.service";
import {MarsimagesService} from "../../service/marsimages.service";

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit {
  marsImageResult: marsImage[] = [];

  constructor(private marsService: MarsimagesService) {}

  ngOnInit() {
    this.reload();
  }

  public reload() {
    this.marsService.getImagesCuriosity().subscribe(
      (images) => {
        this.marsImageResult = this.marsImageResult.concat(images.photos);
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );

    this.marsService.getImagesOpportunity().subscribe(
      (images) => {
        console.log(images.photos);
        this.marsImageResult = this.marsImageResult.concat(images.photos);
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );

    this.marsService.getImagesSpirit().subscribe(
      (images) => {
        console.log(images.photos);
        this.marsImageResult = this.marsImageResult.concat(images.photos);
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );
  }
}




