import {Component, OnInit} from '@angular/core';
import {filter} from "../service/marsImage-repository.service";


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  // rovernameAray: string[] = ["curiosity", "opportunity", "spirit"];

  checktRovers: filter | undefined;


  // public filtercalback(rovernameAray: string[]) {
  //   this.rovernameAray = rovernameAray
  //   console.log("jop da ist alles gut")
  // }

  public newFilter(checkedRovers: filter){
    this.checktRovers = checkedRovers;
  }


  ngOnInit(): void {
  }


}
