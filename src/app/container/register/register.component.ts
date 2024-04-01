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
    // Make a request to /jp route
    this.http.get('/jp').subscribe(
      (response) => {
        console.log(response); // Handle response if needed
      },
      (error) => {
        console.error('Error occurred:', error); // Handle error if needed
      }
    );
  }
  
}
