import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {debounceTime} from 'rxjs/operators';
import {filter, marsImage} from '../../service/marsImage-repository.service';
import {MarsimagesService} from '../../service/marsimages.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-image-box',
  templateUrl: './image-box.component.html',
  styleUrls: ['./image-box.component.css']
})
export class ImageBoxComponent implements OnInit, OnChanges {
  marsImageResult: marsImage[] = [];
  marsImageUnsortedResult: marsImage[] = [];
  sortStyle: 'latestDate' | 'oldestDate' | 'highestResolution' | 'lowestResolution' = 'latestDate';

  @Input() rovernameAray: filter | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['rovernameAray'] && !changes['rovernameAray'].firstChange) {
      const newRovernameAray = changes['rovernameAray'].currentValue;
      this.reload(newRovernameAray);
      console.log(newRovernameAray, "jaaaaaaaaaaaaaaaaaaaaaaa")
    }
  }

  constructor(private marsService: MarsimagesService, private router: Router) {
  }

  ngOnInit() {
    let rovernameAray: filter = {
      checkedRovers: ['curiosity', 'opportunity', 'spirit'],
      solInput: "42"
    };
    this.reload(rovernameAray);
  }

  public reload(rover: filter) {
    this.marsImageResult = [];
    for (let i = 0; i < rover.checkedRovers.length; i++) {
      this.marsService.getRoverImages(rover.checkedRovers[i], rover.solInput).subscribe(
        (images) => {
          this.marsImageResult = this.marsImageResult.concat(images.photos);
          this.marsImageUnsortedResult = this.marsImageResult.slice();
        },
        (error) => {
          console.error('Error fetching Mars images =', error);
        }
      );
    }
  }

  public onImageclick(){

    this.router.navigate(['/image-detail-page']);

  }
}

