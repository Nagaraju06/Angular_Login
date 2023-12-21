import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form: FormGroup;
  

 
  // user = {
  //   firstname: '',
  //   lastname: '',
  //   // username: '',
  //   email: '',
  //   number: '',
  //   password: '',
  //   confirmPassword: ''
  // };

  constructor(private router: Router, private fb: FormBuilder) {
    // this.form = new FormGroup({
    //   firstname: new FormControl('', [Validators.required]),
    //   lastname: new FormControl('', [Validators.required]),
    //   email: new FormControl('', [Validators.required]),
    //   number: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
    //   password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]),
    //   confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(10)])
    // });
    this.form = this.fb.group({
      firstname: ['', [Validators.required, Validators.minLength(3)]],
      lastname: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
  }

  get f(){
    return this.form.value;
  }
  // onSubmit() {
  //   this.user.username = this.generateUsername(this.user.firstname, this.user.lastname);

  //   console.log(this.user);
  //   localStorage.setItem('user', JSON.stringify(this.user));
  //   this.router.navigateByUrl('/login');
  // }
  // private generateUsername(firstName: string, lastName: string): string {
  //   const username = firstName.charAt(0).toLowerCase() + lastName.toLowerCase();

  //   return username;
  // }
  onSubmit() {
    // Check if all required fields are filled out
    debugger;
    if (
      this.form.valid
    ) {
      // Generate username based on first name and last name
      //this.user.username = this.generateUsername(this.user.firstname, this.user.lastname);
  
      //console.log(this.user);
      console.log(this.form.value);
      localStorage.setItem('user', JSON.stringify(this.form.value));
      this.router.navigateByUrl('/login');
    } else {
      alert('Please fill out all required fields');
      // You can also add more sophisticated error handling or display error messages in your template
    }
  }
  // generateUsername(firstname: string, lastname: string): string {
  //   throw new Error('Method not implemented.');
  // }
  
}
