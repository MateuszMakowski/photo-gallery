import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HamburgerComponent } from './hamburger/hamburger.component';

@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    HeaderComponent,
    FooterComponent,
    PortfolioComponent,
    HamburgerComponent,
  ],
  imports: [ReactiveFormsModule, BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
