import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public collapsed = true;
  ngOnInit() {
  }
  
  constructor(private router: Router) { }
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
  redirect(url): void {
    this.toggleCollapsed();
    this.router.navigate([url]);
  }
}
