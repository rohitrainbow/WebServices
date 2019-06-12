import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductDescrComponent } from './ecommerce/product-descr/product-descr.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { AboutComponent } from './ecommerce/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './ecommerce/contact/contact.component';

const appRoutes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
{
  path: 'home',
  component: EcommerceComponent,
  data: { title: 'Home' }
},
{
  path: 'about',
  component: AboutComponent,
  data: { title: 'About Us' }
},
{
  path: 'contact',
  component: ContactComponent,
  data: { title: 'Contact Us' }
},
{
  path: 'productdetails/:id',
  component: ProductDescrComponent,
  data: { title: 'Product Details' }
}];
@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductDescrComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
