import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {filter, marsImage} from '../../service/marsImage-repository.service';
import {MarsimagesService} from '../../service/marsimages.service';
import {Router} from "@angular/router";
// @ts-ignore
import { MatDialog } from '@angular/material/dialog';

// @ts-ignore
import { MyModalComponent } from './my-modal/my-modal.component';


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
    }
  }

  constructor(private marsService: MarsimagesService, private router: Router, private dialog: MatDialog) {
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

  openModal(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '400px', // Passen Sie die Breite nach Bedarf an
    });

    // Sie können auf Ereignisse des Modalfensters reagieren, z.B. wenn es geschlossen wird
    dialogRef.afterClosed().subscribe(() => {
      console.log('Das Modalfenster wurde geschlossen');
    });
  }
}

