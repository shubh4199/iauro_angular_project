import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { LazyLoadImageModule } from 'ng-lazyload-image';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultComponent } from './default/default.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';


import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { SerumsComponent } from './serums/serums.component';
import { CleansersComponent } from './cleansers/cleansers.component';
import { MoisturisersComponent } from './moisturisers/moisturisers.component';
import { TonerComponent } from './toner/toner.component';
import { WipesComponent } from './wipes/wipes.component';
import { CombosComponent } from './combos/combos.component';
import { AllProductsComponent } from './all-products/all-products.component';
import { FooterComponent } from './footer/footer.component';
import { TrackMyOrderComponent } from './track-my-order/track-my-order.component';
import { SimplePhilosophyComponent } from './simple-philosophy/simple-philosophy.component';
import { SkincareTipsComponent } from './skincare-tips/skincare-tips.component';
import { SkincareTips2Component } from './skincare-tips2/skincare-tips2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BestsellersShowComponent } from './bestsellers-show/bestsellers-show.component';  
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DemoComponent } from './demo/demo.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DefaultComponent,
    HeaderComponent,
    DashboardComponent,
    BestsellersComponent,
    SerumsComponent,
    CleansersComponent,
    MoisturisersComponent,
    TonerComponent,
    WipesComponent,
    CombosComponent,
    AllProductsComponent,
    FooterComponent,
    TrackMyOrderComponent,
    SimplePhilosophyComponent,
    SkincareTipsComponent,
    SkincareTips2Component,
    BestsellersShowComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    InfiniteScrollModule,
    LazyLoadImageModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
