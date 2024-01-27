import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {

  public chart: any;
  public maleCount: number = 0;
  public femaleCount: number = 0;

  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.getMaleAndFemaleCounts();
  }

  getMaleAndFemaleCounts(): void {
    this.httpClient.get<number>(`http://localhost:8080/api/get-male-count`)
      .subscribe(maleData => {
        this.maleCount = maleData;

      });
      
    this.httpClient.get<number>(`http://localhost:8080/api/get-female-count`)
      .subscribe(femaleData => {
        this.femaleCount = femaleData;
        this.createChart();
      });
  }

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'pie',
      data: {
        labels: ['Male', 'Female'],
        datasets: [{
          data: [this.maleCount, this.femaleCount],
          backgroundColor: [
            'blue',
            'pink',
          ],
          hoverOffset: 4
        }],
      },
      options: {
        aspectRatio: 2.5
      }
    });
  }
}
