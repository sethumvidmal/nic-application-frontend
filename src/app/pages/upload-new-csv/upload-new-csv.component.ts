import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-upload-new-csv',
  templateUrl: './upload-new-csv.component.html',
  styleUrls: ['./upload-new-csv.component.css']
})
export class UploadNewCsvComponent {

  selectedFiles: File[] = [];

  constructor(private httpClient: HttpClient) {}

  onFileSelected(event: any, index: number): void {
    this.selectedFiles[index] = event.target.files[0];
  }
  
  onSubmit(): void {
    const formData = new FormData();

    for (let i = 0; i < this.selectedFiles.length; i++) {
      formData.append(`csv`, this.selectedFiles[i]);
    }

    this.httpClient.post('http://localhost:8080/api', formData)
      .subscribe(response => {
        console.log(response);
      });
      
      Swal.fire({
        title: "Good job!",
        text: "The files are submitted!",
        icon: "success"
      });
  }
}
