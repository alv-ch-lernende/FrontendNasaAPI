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
  sortStyle: "latestDate" | "oldestDate" | "highestResolution" | "lowestResolution" = "latestDate";

  constructor(private marsService: MarsimagesService) {
  }

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
        this.marsImageResult = this.marsImageResult.concat(images.photos);
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );

    this.marsService.getImagesSpirit().subscribe(
      (images) => {
        this.marsImageResult = this.marsImageResult.concat(images.photos);
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );

  this.sortMarsImageResult(this.sortStyle);
  }

  sortMarsImageResult(sortStyle: "latestDate" | "oldestDate" | "highestResolution" | "lowestResolution") {
    this.sortStyle = sortStyle;
    switch (this.sortStyle) {
      case "latestDate":
        this.marsImageResult = this.marsImageResult.slice().sort((a , b) => Number(a.id) - Number(b.id));
        break;

      case "oldestDate":
        this.marsImageResult = this.marsImageResult.slice().sort((a , b) => Number(b.id) - Number(a.id));
        break;

      case "highestResolution":

        this.marsImageResult = this.marsImageResult.slice().sort((a , b) => this.calculateImageResolution(a.img_src) - this.calculateImageResolution(b.img_src));
        break;

      case "lowestResolution":
        this.marsImageResult = this.marsImageResult.slice().sort((a , b) => this.calculateImageResolution(b.img_src) - this.calculateImageResolution(a.img_src));
        break;
    }
  }

  calculateImageResolution(imageLink: string): number {
    const img = new Image();
    img.src = imageLink;
    return img.width * img.height;
  }

}




