import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FrameworkComponent } from './components/framework/framework.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { Head1Component } from './components/head1/head1.component';
import { Head2Component } from './components/head2/head2.component';
import { Head3Component } from './components/head3/head3.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HumanoterapiaComponent } from './components/humanoterapia/humanoterapia.component';

@NgModule({
  declarations: [
    FrameworkComponent,
    HomePageComponent,
    Head1Component,
    Head2Component,
    Head3Component,
    CarouselComponent,
    FooterComponent,
    HeaderComponent,
    HumanoterapiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
