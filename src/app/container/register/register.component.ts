import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private http: HttpClient) { }

  sendRequestToJP() {
  this.http.get('https://angularback1.vercel.app/jp').subscribe(
      (response) => {
        console.log(response); // Handle response if needed
      },
      (error: HttpErrorResponse) => {
        console.error('Error occurred:', error); // Log the error
      }
    );
  }
  
}
