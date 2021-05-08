import { Component, Input, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';

@Component({
  selector: 'app-graficas',
  templateUrl: './graficas.component.html',
  styleUrls: ['./graficas.component.css']
})
export class GraficasComponent implements OnInit {

  public doughnutChartLabels: Label[] = [];
  public doughnutChartData: MultiDataSet = [];
  public doughnutChartType: ChartType = 'doughnut';
  @Input() data: number[] = []
  @Input() label: string[] = []


  constructor() { }

  ngOnInit(): void {


    this.doughnutChartData.push(this.data);

    this.doughnutChartLabels = this.label

  }

}
