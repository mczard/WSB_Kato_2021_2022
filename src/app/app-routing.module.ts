import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { LoginWindowComponent } from './components/login-window/login-window.component';
import { MainWindowComponent } from './components/main-window/main-window.component';
import { NbpWindowComponent } from './components/nbp-window/nbp-window.component';
import { NotFoundWindowComponent } from './components/not-found-window/not-found-window.component';
import { ProductsComponent } from './components/products/products.component';
import { AuthorizeGuard } from './guards/authorize.guard';

const routes:Routes = [
  {
    path: '',
    component: LoginWindowComponent
  },
  {
    path: 'main',
    component: MainWindowComponent,
    canActivate: [AuthorizeGuard]
  },
  {
    path: 'products/:id',
    component: ProductsComponent
  },
  {
    path: 'nbp',
    component: NbpWindowComponent
  },
  {
    path: '**',
    component: NotFoundWindowComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
