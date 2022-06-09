import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './all-products/all-products.component';
import { BestsellersComponent } from './bestsellers/bestsellers.component';
import { CleansersComponent } from './cleansers/cleansers.component';
import { CombosComponent } from './combos/combos.component';
import { DefaultComponent } from './default/default.component';
import { DemoComponent } from './demo/demo.component';
import { MoisturisersComponent } from './moisturisers/moisturisers.component';
import { SerumsComponent } from './serums/serums.component';
import { SimplePhilosophyComponent } from './simple-philosophy/simple-philosophy.component';
import { SkincareTipsComponent } from './skincare-tips/skincare-tips.component';
import { SkincareTips2Component } from './skincare-tips2/skincare-tips2.component';
import { TonerComponent } from './toner/toner.component';
import { TrackMyOrderComponent } from './track-my-order/track-my-order.component';
import { WipesComponent } from './wipes/wipes.component';

const routes: Routes = [
  {path: '', component: DefaultComponent},

  {path: 'bestsellers', component: BestsellersComponent},
  {path: 'bestsellers/bestsellers', redirectTo:'bestsellers'},
  {path: 'serums/bestsellers', redirectTo:'bestsellers'},
  {path: 'cleansers/bestsellers', redirectTo:'bestsellers'},
  {path: 'moisturisers/bestsellers', redirectTo:'bestsellers'},
  {path: 'toner/bestsellers', redirectTo:'bestsellers'},
  {path: 'wipes/bestsellers', redirectTo:'bestsellers'},
  {path: 'combos/bestsellers', redirectTo:'bestsellers'},
  {path: 'all-products/bestsellers', redirectTo:'bestsellers'},
  {path: 'track-my-order/bestsellers', redirectTo:'bestsellers'},
  {path: 'simple-philosophy/bestsellers', redirectTo:'bestsellers'},
  {path: 'skincare-tips/bestsellers', redirectTo:'bestsellers'},
  {path: 'skincare-tips/skincare-tips2/bestsellers', redirectTo:'bestsellers'},

  {path: 'serums', component: SerumsComponent},
  {path: 'bestsellers/serums', redirectTo:'serums'},
  {path: 'serums/serums', redirectTo:'serums'},
  {path: 'cleansers/serums', redirectTo:'serums'},
  {path: 'moisturisers/serums', redirectTo:'serums'},
  {path: 'toner/serums', redirectTo:'serums'},
  {path: 'wipes/serums', redirectTo:'serums'},
  {path: 'combos/serums', redirectTo:'serums'},
  {path: 'all-products/serums', redirectTo:'serums'},
  {path: 'track-my-order/serums', redirectTo:'serums'},
  {path: 'simple-philosophy/serums', redirectTo:'serums'},
  {path: 'skincare-tips/serums', redirectTo:'serums'},
  {path: 'skincare-tips/skincare-tips2/serums', redirectTo:'serums'},


  {path: 'cleansers', component: CleansersComponent},
  {path: 'bestsellers/cleansers', redirectTo:'cleansers'},
  {path: 'serums/cleansers', redirectTo:'cleansers'},
  {path: 'cleansers/cleansers', redirectTo:'cleansers'},
  {path: 'moisturisers/cleansers', redirectTo:'cleansers'},
  {path: 'toner/cleansers', redirectTo:'cleansers'},
  {path: 'wipes/cleansers', redirectTo:'cleansers'},
  {path: 'combos/cleansers', redirectTo:'cleansers'},
  {path: 'all-products/cleansers', redirectTo:'cleansers'},
  {path: 'track-my-order/cleansers', redirectTo:'cleansers'},
  {path: 'simple-philosophy/cleansers', redirectTo:'cleansers'},
  {path: 'skincare-tips/cleansers', redirectTo:'cleansers'},
  {path: 'skincare-tips/skincare-tips2/cleansers', redirectTo:'cleansers'},

  {path: 'moisturisers', component: MoisturisersComponent},
  {path: 'bestsellers/moisturisers', redirectTo:'moisturisers'},
  {path: 'serums/moisturisers', redirectTo:'moisturisers'},
  {path: 'cleansers/moisturisers', redirectTo:'moisturisers'},
  {path: 'moisturisers/moisturisers', redirectTo:'moisturisers'},
  {path: 'toner/moisturisers', redirectTo:'moisturisers'},
  {path: 'wipes/moisturisers', redirectTo:'moisturisers'},
  {path: 'combos/moisturisers', redirectTo:'moisturisers'},
  {path: 'all-products/moisturisers', redirectTo:'moisturisers'},
  {path: 'track-my-order/moisturisers', redirectTo:'moisturisers'},
  {path: 'simple-philosophy/moisturisers', redirectTo:'moisturisers'},
  {path: 'skincare-tips/moisturisers', redirectTo:'moisturisers'},
  {path: 'skincare-tips/skincare-tips2/moisturisers', redirectTo:'moisturisers'},

  {path: 'toner', component: TonerComponent},
  {path: 'bestsellers/toner', redirectTo:'toner'},
  {path: 'serums/toner', redirectTo:'toner'},
  {path: 'cleansers/toner', redirectTo:'toner'},
  {path: 'moisturisers/toner', redirectTo:'toner'},
  {path: 'toner/toner', redirectTo:'toner'},
  {path: 'wipes/toner', redirectTo:'toner'},
  {path: 'combos/toner', redirectTo:'toner'},
  {path: 'all-products/toner', redirectTo:'toner'},
  {path: 'track-my-order/toner', redirectTo:'toner'},
  {path: 'simple-philosophy/toner', redirectTo:'toner'},
  {path: 'skincare-tips/toner', redirectTo:'toner'},
  {path: 'skincare-tips/skincare-tips2/toner', redirectTo:'toner'},

  {path: 'wipes', component: WipesComponent},
  {path: 'bestsellers/wipes', redirectTo:'wipes'},
  {path: 'serums/wipes', redirectTo:'wipes'},
  {path: 'cleansers/wipes', redirectTo:'wipes'},
  {path: 'moisturisers/wipes', redirectTo:'wipes'},
  {path: 'toner/wipes', redirectTo:'wipes'},
  {path: 'wipes/wipes', redirectTo:'wipes'},
  {path: 'combos/wipes', redirectTo:'wipes'},
  {path: 'all-products/wipes', redirectTo:'wipes'},
  {path: 'track-my-order/wipes', redirectTo:'wipes'},
  {path: 'simple-philosophy/wipes', redirectTo:'wipes'},
  {path: 'skincare-tips/wipes', redirectTo:'wipes'},
  {path: 'skincare-tips/skincare-tips2/wipes', redirectTo:'wipes'},

  {path: 'combos', component: CombosComponent},
  {path: 'bestsellers/combos', redirectTo:'combos'},
  {path: 'serums/combos', redirectTo:'combos'},
  {path: 'cleansers/combos', redirectTo:'combos'},
  {path: 'moisturisers/combos', redirectTo:'combos'},
  {path: 'toner/combos', redirectTo:'combos'},
  {path: 'wipes/combos', redirectTo:'combos'},
  {path: 'combos/combos', redirectTo:'combos'},
  {path: 'all-products/combos', redirectTo:'combos'},
  {path: 'track-my-order/combos', redirectTo:'combos'},
  {path: 'simple-philosophy/combos', redirectTo:'combos'},
  {path: 'skincare-tips/combos', redirectTo:'combos'},
  {path: 'skincare-tips/skincare-tips2/combos', redirectTo:'combos'},

  {path: 'all-products', component: AllProductsComponent},
  {path: 'bestsellers/all-products', redirectTo:'all-products'},
  {path: 'serums/all-products', redirectTo:'all-products'},
  {path: 'cleansers/all-products', redirectTo:'all-products'},
  {path: 'moisturisers/all-products', redirectTo:'all-products'},
  {path: 'toner/all-products', redirectTo:'all-products'},
  {path: 'wipes/all-products', redirectTo:'all-products'},
  {path: 'combos/all-products', redirectTo:'all-products'},
  {path: 'all-products/all-products', redirectTo:'all-products'},
  {path: 'track-my-order/all-products', redirectTo:'all-products'},
  {path: 'simple-philosophy/all-products', redirectTo:'all-products'},
  {path: 'skincare-tips/all-products', redirectTo:'all-products'},
  {path: 'skincare-tips/skincare-tips2/all-products', redirectTo:'all-products'},
  
  {path: 'track-my-order', component: TrackMyOrderComponent},
  {path: 'bestsellers/track-my-order', redirectTo:'track-my-order'},
  {path: 'serums/track-my-order', redirectTo:'track-my-order'},
  {path: 'cleansers/track-my-order', redirectTo:'track-my-order'},
  {path: 'moisturisers/track-my-order', redirectTo:'track-my-order'},
  {path: 'toner/track-my-order', redirectTo:'track-my-order'},
  {path: 'wipes/track-my-order', redirectTo:'track-my-order'},
  {path: 'combos/track-my-order', redirectTo:'track-my-order'},
  {path: 'all-products/track-my-order', redirectTo:'track-my-order'},
  {path: 'track-my-order/track-my-order', redirectTo:'track-my-order'},
  {path: 'simple-philosophy/track-my-order', redirectTo:'track-my-order'},
  {path: 'skincare-tips/track-my-order', redirectTo:'track-my-order'},
  {path: 'skincare-tips/skincare-tips2/track-my-order', redirectTo:'track-my-order'},

  {path: 'simple-philosophy', component: SimplePhilosophyComponent},
  {path: 'bestsellers/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'serums/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'cleansers/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'moisturisers/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'toner/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'wipes/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'combos/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'all-products/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'track-my-order/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'simple-philosophy/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'skincare-tips/simple-philosophy', redirectTo:'simple-philosophy'},
  {path: 'skincare-tips/skincare-tips2/simple-philosophy', redirectTo:'simple-philosophy'},

  {path: 'skincare-tips', component: SkincareTipsComponent},
  {path: 'bestsellers/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'serums/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'cleansers/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'moisturisers/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'toner/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'wipes/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'combos/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'all-products/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'track-my-order/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'simple-philosophy/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'skincare-tips/skincare-tips', redirectTo:'skincare-tips'},
  {path: 'skincare-tips/skincare-tips2/skincare-tips', redirectTo:'skincare-tips'},

  {path: 'skincare-tips/skincare-tips2', component: SkincareTips2Component},
  {path: 'bestsellers/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'serums/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'cleansers/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'moisturisers/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'toner/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'wipes/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'combos/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'all-products/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'track-my-order/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'simple-philosophy/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'skincare-tips/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},
  {path: 'skincare-tips/skincare-tips2/skincare-tips/skincare-tips2', redirectTo:'skincare-tips/skincare-tips2'},

  {path: 'demo', component: DemoComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
