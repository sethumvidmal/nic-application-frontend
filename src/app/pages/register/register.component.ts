import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  private http;

  public admin = {
    userName: null,
    password: null
  }

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }

  saveAdmin(): void {
    this.http.post(`http://localhost:8080/register-admin`, this.admin)
      .subscribe(data => {
        console.log(data);
      })
  }
}
