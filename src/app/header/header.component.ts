import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from '../user-authentication.service';
import { Router } from '@angular/router';  
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  currentUser: any;

  constructor(private userAuthService: UserAuthenticationService, private router: Router) {}

  ngOnInit() {
    this.currentUser = this.userAuthService.getCurrentUser();
    console.log('Current User:', this.currentUser);
  }

  

 

  logout() {
    this.userAuthService.logout();
    localStorage.clear();
    this.router.navigate(['/login']);
    // Add additional logic, such as navigating to the home page
  }
}
