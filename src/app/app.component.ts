import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { XAxisTickFormatPipe } from './x-axis-tick-format.pipe';
import * as D3 from 'd3';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  from: Date;
  to: Date;
  chartData: any[];
  name1: string = 'series1';
  name2: string = 'series2';
  color1: string = '#3f51b5'; // blue
  color2: string = '#ff8f00'; // orange
  customColors: any[];
  interpolationFunction = D3.curveStepAfter;

  constructor(public translateService: TranslateService) {
    translateService.setDefaultLang('en-US');
    this.customColors = [
      {
        name: this.name1,
        value: this.color1
      },
      {
        name: this.name2,
        value: this.color2
      }
    ];
  }

  ngOnInit() {
    this.translateService.use('de-DE');

    this.from = new Date(2018, 4, 4, 0, 0, 0);
    this.to = new Date(2018, 4, 5, 0, 0, 0);
    this.chartData = [
      {
        name: this.name1,
        series: [
          {
            name: new Date(2018, 4, 4, 4, 0, 0),
            value: 7300000
          },
          {
            name: new Date(2018, 4, 4, 14, 0, 0),
            value: 4240000
          },
          {
            name: new Date(2018, 4, 4, 21, 0, 0),
            value: 5270000
          }
        ]
      },
      {
        name: this.name2,
        series: [
          {
            name: new Date(2018, 4, 4, 6, 0, 0),
            value: 7870000
          },
          {
            name: new Date(2018, 4, 4, 18, 0, 0),
            value: 8270000
          },
          {
            name: new Date(2018, 4, 4, 23, 0, 0),
            value: 6270000
          }
        ]
      }
    ];
  }

  yAxisTickFormatting(value): string {
    // Must be in this component. See: https://github.com/swimlane/ngx-charts/issues/261
    if (this.translateService.currentLang) {
      return value.toLocaleString(this.translateService.currentLang);
    } else {
      return value.toString();
    }
  }

  xAxisTickFormatting(value): string {
    // Must be in this component. See: https://github.com/swimlane/ngx-charts/issues/261
    const formatPipe: XAxisTickFormatPipe = new XAxisTickFormatPipe();
    return formatPipe.transform(value, this.translateService.currentLang);
  }
}
