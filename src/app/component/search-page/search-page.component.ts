import {Component, OnInit} from '@angular/core';
import {MarsimagesService} from '../service/marsimages.service';
import {marsImage} from "../service/marsImage-repository.service";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

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
        console.log(images.photos[0])
      },
      (error) => {
        console.error('Error fetching Mars images:', error);
      }
    );
  }



}
