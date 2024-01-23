import { Component, Input } from '@angular/core';
import {ModalService} from "../service/modal.service";

@Component({
  selector: 'app-image-popup',
  templateUrl: './image-popup.component.html',
  styleUrls: ['./image-popup.component.css']
})
export class ImagePopupComponent {
  @Input() imageUrl: string | undefined;

  constructor(private modalService: ModalService) {}

  closePopup() {
    this.modalService.closeImagePopup();
  }
}
