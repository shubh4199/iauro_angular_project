import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgImageSliderModule } from 'ng-image-slider';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';  

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
    SkincareTips2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
