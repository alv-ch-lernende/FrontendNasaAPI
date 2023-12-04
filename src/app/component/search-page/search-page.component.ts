import { Component, OnInit } from '@angular/core';
import { MarsimagesService } from '../service/marsimages.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  marsImages: any[] | undefined; // Typisiere dies entsprechend den erwarteten Daten

  constructor(private marsService: MarsimagesService) {}

  ngOnInit() {
    this.marsService.getImages().subscribe(
      (images) => {
        this.marsImages = images;
        console.log(images)
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );
  }


}
