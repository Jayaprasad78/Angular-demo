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
        console.error('Error occurred:', error); // Log the full error object

        // Log additional error properties if available
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          console.error('An error occurred:', error.error.message);
        } else {
          // Server-side error
          console.error(`Server returned error code ${error.status}, body was: ${error.error}`);
        }

        // Log headers if available
        console.error('Response headers:', error.headers);

        // Log any other available properties of the error object
        console.error('Error properties:', error.name, error.ok, error.statusText);
      }
    );
  }
  
}
