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
  sortStyle: "latestDate" | "oldestDate" | "highestResolution" | "lowestResolution" = "highestResolution";

  constructor(private marsService: MarsimagesService) {
  }

  ngOnInit() {
    this.reload();
    this.sortMarsImageResult(this.sortStyle);
  }

  public reload() {
    this.marsService.getImagesCuriosity().subscribe(
      (images) => {
        this.marsImageResult = this.marsImageResult.concat(images.photos);
        this.marsService.getImagesOpportunity().subscribe(
          (images) => {
            this.marsImageResult = this.marsImageResult.concat(images.photos);
            this.marsService.getImagesSpirit().subscribe(
              (images) => {
                this.marsImageResult = this.marsImageResult.concat(images.photos);
                this.sortMarsImageResult(this.sortStyle);
              },
              (error) => {
                console.error('Error fetching Mars images:', error);
              }
            );
          },
          (error) => {
            console.error('Error fetching Mars images:', error);
          }
        );
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );

    // this.marsService.getImagesOpportunity().subscribe(
    //   (images) => {
    //     this.marsImageResult = this.marsImageResult.concat(images.photos);
    //   },
    //   (error) => {
    //     console.error('Error fetching Mars images:', error);
    //   }
    // );
    //
    // this.marsService.getImagesSpirit().subscribe(
    //   (images) => {
    //     this.marsImageResult = this.marsImageResult.concat(images.photos);
    //   },
    //   (error) => {
    //     console.error('Error fetching Mars images:', error);
    //   }
    // );
  }

  sortMarsImageResult(sortStyle: "latestDate" | "oldestDate" | "highestResolution" | "lowestResolution") {
    if (this.sortStyle != sortStyle){
      this.sortStyle = sortStyle;
    }
    switch (this.sortStyle) {
      case "latestDate":
        this.marsImageResult = this.marsImageResult.slice().sort((a , b) => Number(a.id) - Number(b.id));
        break;

      case "oldestDate":
        this.marsImageResult = this.marsImageResult.slice().sort((a , b) => Number(b.id) - Number(a.id));
        break;

      // case "highestResolution":
      //   this.marsImageResult = this.marsImageResult.slice().sort((a , b) => this.calculateImageResolution(a.img_src) - this.calculateImageResolution(b.img_src));
      //   break;

    //   case "lowestResolution":
    //     this.marsImageResult = this.marsImageResult.slice().sort((a , b) => {
    //       this.calculateImageResolution(b.img_src).then(value1 => { this.calculateImageResolution(a.img_src).then(value2 => {
    //         return value1 - value2;
    //       })
    //       });
    //     })
    //     break;
    }
  }

  // async calculateImageResolution(imageLink: string) {
  //   const img = new Image();
  //   img.src = imageLink;
  //   var x = img.onload = function () {
  //     return img.width * img.height;
  //   }
  //   return x;
  //
  // }

}




