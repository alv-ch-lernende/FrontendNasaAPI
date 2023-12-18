import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {allMarsImages, filter, marsImage} from "../../service/marsImage-repository.service";
import {MarsimagesService} from "../../service/marsimages.service";
import {wichBoxCheckt} from "../filter-box/filter-box.component";

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit, OnChanges {
  marsImageResult: marsImage[] = [];
  marsImageUnsortedResult: marsImage[] = [];
  sortStyle: "latestDate" | "oldestDate" | "highestResolution" | "lowestResolution" = "latestDate";

  @Input()
  currentFilter: filter | undefined ;


  constructor(private marsService: MarsimagesService) {
  }

  ngOnInit() {
    this.reload();
  }

  ngOnChanges() {

  }

  public reload() {
    this.marsService.getRoverImages("opportunity").subscribe(
      (images) => {
        this.marsImageResult = this.marsImageResult.concat(images.photos);
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );

  }

  sortMarsImageResult(sortStyle: "latestDate" | "oldestDate") {
    if (this.sortStyle != sortStyle) {
      this.sortStyle = sortStyle;
    }
    switch (this.sortStyle) {
      case "latestDate":
        this.marsImageResult = this.marsImageUnsortedResult.slice().sort((a, b) => Number(a.id) - Number(b.id));
        break;

      case "oldestDate":
        this.marsImageResult = this.marsImageUnsortedResult.slice().sort((a, b) => Number(b.id) - Number(a.id));
        break;
    }
  }
}
