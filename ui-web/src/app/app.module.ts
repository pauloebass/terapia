import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FrameworkComponent } from './src/app/framework/framework.component';
import { HomePageComponent } from './src/app/home-page/home-page.component';
import { Head1Component } from './src/app/head1/head1.component';
import { Head2Component } from './src/app/head2/head2.component';
import { Head3Component } from './src/app/head3/head3.component';
import { CarouselComponent } from './src/app/carousel/carousel.component';
import { FooterComponent } from './src/app/footer/footer.component';
import { HeaderComponent } from './src/app/header/header.component';

@NgModule({
  declarations: [
    FrameworkComponent,
    HomePageComponent,
    Head1Component,
    Head2Component,
    Head3Component,
    CarouselComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
