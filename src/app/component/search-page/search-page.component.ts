import {Component, OnInit} from '@angular/core';
import {filter} from "../service/marsImage-repository.service";


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  checktRovers: filter | undefined;

  public newFilter(checkedRovers: filter){
    this.checktRovers = checkedRovers;
  }

  ngOnInit(): void {
  }
}
