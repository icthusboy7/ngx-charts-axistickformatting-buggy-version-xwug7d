import { NgModule } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartCommonModule } from '@swimlane/ngx-charts';
import { TranslateModule } from '@ngx-translate/core';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { XAxisTickFormatPipe } from './x-axis-tick-format.pipe';
import { CustomLineChartComponent } from './custom-line-chart.component';

registerLocaleData(localeDe, 'de-DE');

@NgModule({
  imports:      [ 
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule, 
    NgxChartsModule, 
    ChartCommonModule,
    TranslateModule.forRoot() 
  ],
  declarations: [ 
    AppComponent, 
    HelloComponent, 
    XAxisTickFormatPipe, 
    CustomLineChartComponent 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
