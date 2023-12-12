import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit{

  message = '';
  constructor() {
  }

  ngOnInit(): void {
  }

  public callMe(thisString: string){
    this.message = thisString;
  }


}
