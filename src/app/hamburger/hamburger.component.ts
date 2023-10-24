import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent {
  checked: boolean = false;
  isOpen: boolean = false;
  showOrHideMenu() {
    if (this.checked) {
      this.isOpen = false;
      setTimeout(() => {
        this.checked = false;
      }, 500);
    } else {
      this.checked = true;
      setTimeout(() => {
        this.isOpen = true;
      }, 1);
    }
  }

  @HostListener('wheel', ['$event'])
  preventScroll(event: WheelEvent): void {
    if (this.checked) {
      event.preventDefault();
    }
  }

  @HostListener('touchmove', ['$event'])
  preventTouchScroll(event: TouchEvent): void {
    if (this.checked) {
      event.preventDefault();
    }
  }
}
