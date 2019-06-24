import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EcommerceComponent } from './ecommerce/ecommerce.component';
import { ProductDescrComponent } from './ecommerce/product-descr/product-descr.component';
import { ProductsComponent } from './ecommerce/products/products.component';
import { AboutComponent } from './ecommerce/about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './ecommerce/contact/contact.component';
import { NavbarComponent } from './ecommerce/navbar/navbar.component';
import { SearchComponent } from './ecommerce/search/search.component';
import { CartComponent } from './ecommerce/cart/cart.component';
import { LoginComponent } from './ecommerce/login/login.component';
import { RegisterComponent } from './ecommerce/register/register.component';

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
  path: 'home/:id',
  component: SearchComponent,
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
  path: 'cart',
  component: CartComponent,
  data: { title: 'Cart' }
},
{
  path: 'login',
  component: LoginComponent,
  data: { title: 'Login' }
}, 
{
  path: 'register',
  component: RegisterComponent,
  data: { title: 'Register' }
},
{
  path: 'productdetails/:id',
  component: ProductDescrComponent,
  data: { title: 'Product Details' }
}, { path: '**', component: EcommerceComponent }];
@NgModule({
  declarations: [
    AppComponent,
    EcommerceComponent,
    ProductDescrComponent,
    ProductsComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    SearchComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, { useHash: true })
  ],
  providers: [NavbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
