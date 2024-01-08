import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {debounceTime} from "rxjs";

@Component({
  selector: 'app-filter-box',
  templateUrl: './filter-box.component.html',
  styleUrls: ['./filter-box.component.css']
})
export class FilterBoxComponent implements OnInit {

  filterForm = new FormGroup({
    opportunityRover: new FormControl(false),
    curiosityRover: new FormControl(false),
    spiritRover: new FormControl(false),
    solInput: new FormControl(null, Validators.max(13000))
  })

  constructor() {
  }

  ngOnInit(): void   {
    this.filterForm.valueChanges.pipe(
      debounceTime(500)).subscribe(value => {
      if (this.filterForm.valid) {
        // reload(wichBoxCheckt());


      }
    })
  }
}



export function wichBoxCheckt() {
  let boxNames: string[] = ["curiosity", "opportunity", "spirit"];
  let idsForGetRequest: string[] = [];
  for (let i = 0; i < boxNames.length; i++) {
    var element = <HTMLInputElement>document.getElementById(boxNames[i]);
    var isChecked = element.checked;
    if (isChecked === true) {
      console.log("isCheckt is true")
      idsForGetRequest.push(boxNames[i])
    }
  }
  return idsForGetRequest;
}


