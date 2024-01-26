import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nic-table',
  templateUrl: './nic-table.component.html',
  styleUrls: ['./nic-table.component.css']
})
export class NicTableComponent implements OnInit{

  private http;
  public persons:any;

  constructor(private httpClient: HttpClient) {
    this.http = httpClient;
  }
  ngOnInit(): void {
    this.loadAllPersons();
  }

  

  loadAllPersons() {
    this.http.get(`http://localhost:8080/api`).subscribe(data => {
      this.persons = data;
    });

  }
}
