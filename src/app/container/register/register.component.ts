import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  phone: number = 0;
  work: string = '';
  password: string = '';
  cpassword: string = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    
    let bodyData = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      work: this.work,
      password: this.password,
      // Assuming you have a backend that expects a 'cpassword' field
      cpassword: this.cpassword 
    };

    this.http.post('https://angularback1.vercel.app/signup', bodyData, { responseType: 'text' })
    .subscribe(
      (resultData: any) => {
        console.log(resultData);
        alert('Registered Successfully');
  
        // Resetting the form after successful registration
        this.name = '';
        this.email = '';
        this.phone = 0;
        this.work = '';
        this.password = '';
        this.cpassword = '';
      },
      (error) => {
        console.error('Error during registration:', error);

        if (error.status === 400) {
          alert('Validation failed. Please fill in all the fields.');
        } else if (error.status === 401) {
          alert('Email is already registered.');
        } else if (error.status === 402) {
          alert('Passwords do not match.');
        } else {
          alert('An error occurred during registration.');
        }
       
      }
      
    );
    }  
}

  
