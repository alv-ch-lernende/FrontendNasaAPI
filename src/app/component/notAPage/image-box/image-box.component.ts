import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {marsImage} from '../../service/marsImage-repository.service';
import {MarsimagesService} from '../../service/marsimages.service';

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit, OnChanges {
  marsImageResult: marsImage[] = [];
  marsImageUnsortedResult: marsImage[] = [];
  sortStyle: 'latestDate' | 'oldestDate' | 'highestResolution' | 'lowestResolution' = 'latestDate';

  @Input() rovernameAray: string[] = ["curiosity", "opportunity", "spirit"];

  ngOnChanges(changes: SimpleChanges) {
    console.log("test");
    if (changes['rovernameAray'] && !changes['rovernameAray'].firstChange) {
      const newRovernameAray = changes['rovernameAray'].currentValue;
      console.log('Child', this.rovernameAray);

      this.reload(newRovernameAray);
    }
  }

  constructor(private marsService: MarsimagesService) {
  }

  ngOnInit() {
    let rovernameAray: string[] = ['curiosity', 'opportunity', 'spirit'];
    this.reload(rovernameAray);
  }

  public reload(rover: any[]) {
    this.marsImageResult = []; // Clear existing images before loading new ones

    for (let i = 0; i < rover.length; i++) {
      this.marsService.getRoverImages(rover[i]).subscribe(
        (images) => {
          this.marsImageResult = this.marsImageResult.concat(images.photos);
          this.marsImageUnsortedResult = this.marsImageResult.slice(); // Keep a copy for sorting
        },
        (error) => {
          console.error('Error fetching Mars images:', error);
        }
      );
    }
  }

  sortMarsImageResult(sortStyle: 'latestDate' | 'oldestDate') {
    if (this.sortStyle !== sortStyle) {
      this.sortStyle = sortStyle;
    }
    switch (this.sortStyle) {
      case 'latestDate':
        this.marsImageResult = this.marsImageUnsortedResult.slice().sort((a, b) => Number(a.id) - Number(b.id));
        break;

      case 'oldestDate':
        this.marsImageResult = this.marsImageUnsortedResult.slice().sort((a, b) => Number(b.id) - Number(a.id));
        break;
    }
  }
}
