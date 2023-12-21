import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  onSubmit() {
    // debugger;
    //console.log(this.user);
   
    // Retrieve user data from local storage
    const storedUserDataString = localStorage.getItem('user');

  if (storedUserDataString) {
    
    // Parse the JSON data if it's not null
    const storedUserData = JSON.parse(storedUserDataString);

    // Check if the entered email and password match the stored data
    if (
    
      this.user.email === storedUserData.email &&
      this.user.password === storedUserData.password
    ) 
    {
      // Redirect to the welcome page on successful login
      console.log('Application login');
      this.router.navigateByUrl('/home');
      // return;
    }
  }
  else {
    // Handle incorrect login credentials
  console.log('Invalid credentials');
  }

  
}
}
