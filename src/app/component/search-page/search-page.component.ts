import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  // rovernameAray: string[] = ["curiosity", "opportunity", "spirit"];

  checktRovers: string[] = ["curiosity", "opportunity", "spirit"];


  // public filtercalback(rovernameAray: string[]) {
  //   this.rovernameAray = rovernameAray
  //   console.log("jop da ist alles gut")
  // }

  public newFilter(checkedRovers: string[]){
    this.checktRovers = checkedRovers;
  }


  ngOnInit(): void {
  }


}
