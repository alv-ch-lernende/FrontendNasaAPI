import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-sortierung',
  templateUrl: './sortierung.component.html',
  styleUrls: ['./sortierung.component.css']
})

export class SortierungComponent {
  @Input()
  thisVar = '';

  @Output()
  dropdownItemSelected = new EventEmitter<string>();

  selectedOption: string = '';


  dropDownClicked(message:string){
    this.dropdownItemSelected.emit(message);
  }


  onOptionSelected(option: string): void {
    this.selectedOption = option;
    console.log('Selected Option:', this.selectedOption);
  }
}
