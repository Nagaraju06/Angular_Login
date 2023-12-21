import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthenticationService {

  constructor() { }
  private isAuthenticated = false;
  private currentUser: any;

  login(user: any) {
    // Perform authentication logic
    // For simplicity, assume the user is authenticated
    this.isAuthenticated = true;
    this.currentUser = user;
  }

  logout() {
    // Perform logout logic
    this.isAuthenticated = false;
    this.currentUser = null;
  }

  isLoggedIn() {
    return this.isAuthenticated;
  }

  getCurrentUser() {
    return this.currentUser;
  }
}
