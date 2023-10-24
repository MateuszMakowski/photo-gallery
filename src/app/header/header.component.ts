import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  innerWidth!: number;
  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  scrollToContact() {
    const targetElement = document.getElementById('contact');

    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  }
}
