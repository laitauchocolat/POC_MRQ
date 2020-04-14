import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { LogInComponent } from './log-in/log-in.component';
import { CartComponent } from './store/cart/cart.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  { path: 'store', component: StoreComponent },
  { path: 'login', component: LogInComponent },
  { path: 'cart', component: CartComponent },
  { path: 'main', component: MainComponent },
  { path: '', redirectTo: '/main', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
