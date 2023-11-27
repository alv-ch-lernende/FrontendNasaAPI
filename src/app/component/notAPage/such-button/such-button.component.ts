import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-such-button',
  templateUrl: './such-button.component.html',
  styleUrls: ['./such-button.component.css']
})
export class SuchButtonComponent {
  constructor(private router: Router) {}
  handleClick() {
    this.router.navigate(['/search']);
  }
}
