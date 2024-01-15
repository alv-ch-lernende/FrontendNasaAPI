import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {debounceTime} from "rxjs";
import {filter} from "../../service/marsImage-repository.service";

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
  //
  // @Input()
  // public myCallback: Function | undefined;

  @Output()
  filterHasChanged = new EventEmitter<filter>();



  ngOnInit(): void {

    this.filterForm.valueChanges.pipe(
      debounceTime(500)).subscribe(value => {
      if (this.filterForm.valid) {
        // @ts-ignore
        // this.myCallback(wichBoxCheckt());
        this.filterHasChanged.emit(createFilterObject())

      }
    })
  }
}


function createFilterObject() {
  let ifNull: string[] = ["curiosity", "opportunity", "spirit"];
  let boxNames: string[] = ["curiosity", "opportunity", "spirit"];
  let idsForGetRequest: string[] = [];

  var sol = document.getElementById("solElement") as HTMLInputElement;
  let value  = sol?.value

  for (let i = 0; i < boxNames.length; i++) {
    var checkbox = <HTMLInputElement>document.getElementById(boxNames[i]);
    var isChecked = checkbox.checked;



    if (isChecked === true) {
      console.log("isChecked is true")
      idsForGetRequest.push(boxNames[i])
    }0
  }



  if (idsForGetRequest.length !== 0){
    return {
      solInput: value,
      checkedRovers: idsForGetRequest
    } as filter;
  }
  else {
    return {
      solInput: "42",
      checkedRovers: boxNames
    } as filter;
  }


}

