import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private isOpen = false;
  private imageUrl: string | undefined | null;

  openImagePopup(imageUrl: string) {
    this.isOpen = true;
    this.imageUrl = imageUrl;
  }

  closeImagePopup() {
    this.isOpen = false;
    this.imageUrl = null;
  }
  isModalOpen(): boolean {
    return this.isOpen;
  }

  getImageUrl(): string {
    return <string>this.imageUrl;
  }

  constructor() { }
}
