import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  constructor(private http: HttpClient) {}

  sendRequest() {
    this.http.get<any>('https://your-backend-url/jp').subscribe(
      (response) => {
        console.log(response); // Log the response for debugging
        if (response === 'ok') {
          alert('Successful'); // Display alert if response is 'ok'
        }
      },
      (error) => {
        console.error('Error:', error); // Log error if request fails
      }
    );
  }
}


