import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public collapsed = true;
  public collapsed2 = true;
  cartItems: string[];
  wishlistItems: string[];
  ngOnInit() {
    if (!localStorage.getItem('cartItems'))
      localStorage.setItem('cartItems', '[]');
    if (!localStorage.getItem('wishlistItems'))
      localStorage.setItem('wishlistItems', '[]');
  }

  constructor(private router: Router) {
    if (localStorage.getItem('cartItems') != (null && '[]')) {
      this.cartItems = localStorage.getItem('cartItems').split(",");
    }

    if (localStorage.getItem('wishlistItems') != (null && '[]')) {
      this.wishlistItems = localStorage.getItem('wishlistItems').split(",");
    }

  }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  redirect(url): void {
    this.toggleCollapsed();
    this.router.navigate([url]);
  }

  toggleCollapsed2(): void {
    this.collapsed2 = !this.collapsed2;
  }
  redirect2(url): void {
    this.toggleCollapsed2();
    this.router.navigate([url]);
  }
  search(input): void {
    this.router.navigate(['/home', input]);
  }

  cart() {
  }

  wishlist() {

  }
}
