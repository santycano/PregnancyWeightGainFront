import { Component, OnInit } from '@angular/core';
import { RecordService } from '../service/record.service';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent implements OnInit {

  public isSelected: boolean;
  public inputdata: Array<any>;
  public week: any;
  public weight: any;
  public idUser: any;
  public preWeight: any;
  // tslint:disable-next-line:ban-types
  private repos: Object;
  private begining: boolean;
  private exist: boolean;
  private weeks: Array<any>;
  private postId: any;

  constructor(private recordService: RecordService) {
  }

  private basicData: Array<any> = [// tslint:disable-next-line:max-line-length
    { data:  [-1.20, -1.33, -1.35, -1.31, -1.20, -1.06, -0.87, -0.65, -0.37, -0.04, 0.34, 0.76, 1.21, 1.67, 2.14, 2.61, 3.07, 3.53, 3.99, 4.43, 4.86, 5.29, 5.70, 6.11, 6.52, 6.91, 7.31, 7.69, 8.07, 8.44, 8.81], label: 'Percentil 3' },
    // tslint:disable-next-line:max-line-length
    { data:  [0.34, 0.37,  0.49,  0.67,  0.92,  1.22,  1.56,  1.93,  2.34,  2.77, 3.23,  3.70, 4.17, 4.64, 5.11, 5.57, 6.01, 6.45, 6.87, 7.29, 7.70, 8.09, 8.48, 8.87, 9.25, 9.62, 9.99, 10.35, 10.71, 11.06, 11.41], label: 'Percentil 25'},
    // tslint:disable-next-line:max-line-length
    { data:  [1.75, 1.94, 2.18, 2.49, 2.85, 3.28, 3.75, 4.25, 4.77, 5.30, 5.83, 6.35, 6.87, 7.37, 7.85, 8.32, 8.78, 9.23, 9.67, 10.09, 10.51, 10.92, 11.32, 11.72, 12.11, 12.50, 12.88, 13.25, 13.62, 13.98, 14.34], label: 'Percentil 50'},
    // tslint:disable-next-line:max-line-length
    { data:  [3.75, 4.12, 4.49, 4.88, 5.34, 5.87, 6.45, 7.07, 7.70, 8.32, 8.93, 9.51, 10.06, 10.60, 11.12, 11.62, 12.11, 12.60, 13.08, 13.56, 14.04, 14.51, 14.98, 15.45, 15.91, 16.36, 16.81, 17.25, 17.69, 18.12, 18.54], label: 'Percentil 75'},
    // tslint:disable-next-line:max-line-length
    { data:  [9.78, 10.15, 10.21, 10.30, 10.55, 10.97, 11.52, 12.15, 12.81, 13.48, 14.11, 14.72, 15.29, 15.85, 16.40, 16.95, 17.51, 18.10, 18.71, 19.35, 20.01, 20.70, 21.40, 22.13, 22.86, 23.61, 24.37, 25.14, 25.91, 26.70, 27.49], label: 'Percentil 97'}
  ];

  // lineChart
  public lineChartData: Array<any> = this.basicData;

  // tslint:disable-next-line:max-line-length
  public lineChartLabels: Array<any> = [10, 11	, 12	, 13	, 14	, 15	, 16,	17	, 18	, 19	, 20	, 21, 22	, 23	, 24,	25,	26,	27,	28	, 29	, 30	, 31,	32	, 33	, 34,	35	, 36	, 37	, 38,	39	, 40];

  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    {
      // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    {
      // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';

  // events

  public chartOptions: any = {
    responsive: true,
    maintainAspectRatio: false
  };

  // tslint:disable-next-line:ban-types

  public addData(){
    // tslint:disable-next-line:prefer-const
    while (this.inputdata.length < this.week - 10) {
      this.inputdata.push(null);
    }
    console.log(this.inputdata.length);
    if (this.inputdata.length > this.week - 10){
      return;
    }
    this.weeks.push(Number(this.week));
    this.inputdata.push(Number(this.weight) - this.preWeight);
    if (this.begining){
      this.lineChartData.push({ data: this.inputdata, label: 'Datos del usuario', spanGaps: true});
      this.begining = false;
    }
  }

  ngOnInit() {
    this.isSelected = false;
    this.exist = false;
    this.begining = true;
    this.inputdata = this.inputdata || [];
    this.weeks = this.weeks || [];
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  getData(){
    this.isSelected = true;
    this.recordService.getRecord(this.idUser).subscribe(
      (response) => {                           // next() callback
        if (!Object.keys(response).length){
          return;
        }
        console.log('response received');
        this.repos = response;
        this.inputdata = this.repos[0].weight;
        this.inputdata = [].concat.apply([], this.inputdata);
        this.weeks = this.repos[0].week;
        console.log(this.repos[0].pregestationalWeight.$numberDecimal);
        this.preWeight = Number(this.repos[0].pregestationalWeight.$numberDecimal);
        this.weeks = [].concat.apply([], this.weeks);
        this.lineChartData.push({ data: this.inputdata, label: 'Datos del usuario', spanGaps: true});
        this.begining = false;
        this.exist = true;
      });
  }

  saveData() {
    if (this.exist){
      this.recordService.updateRecord(this.weeks, this.inputdata).subscribe(data => {
        this.postId = data.id;
      });
    }
    else {
      this.recordService.addRecord(this.idUser, this.weeks, this.preWeight, this.inputdata).subscribe(data => {
        this.postId = data.id;
      });
    }
  }
}
