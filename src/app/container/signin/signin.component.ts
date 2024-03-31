import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private http: HttpClient) {}

  signIn() {
    let bodyData = {
      email: this.email,
      password: this.password
    };

    this.http.post('http://localhost:3000/signin', bodyData, { responseType: 'text' })
      .subscribe(
        (resultData: any) => {
          console.log(resultData);
          alert('Sign-in Successful');
          // Resetting the form after successful sign-in
          this.email = '';
          this.password = '';
        },
        (error) => {
          console.error('Error during sign-in:', error);

          if (error.status === 404) {
            alert('email is not registered');
          } else if (error.status === 401){
            alert('pass is incorrect');

          }else {
            alert('An error occurred during sign-in.');
          }
        }
      );
  }
}


