import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent} from './pages/products/products.component';

const routes: Routes = [
  {
path:'contact',
title: 'contacto',
 component:ContactComponent
},
{
  title: 'Procuctos',
  path:'product',
   component:ProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
