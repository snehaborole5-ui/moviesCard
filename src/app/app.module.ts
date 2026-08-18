import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieCardComponent } from './movie-card/movie-card.component';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { HttpClientModule} from"@angular/common/http";
import { ProductDashboardComponent } from './product-dashboard/product-dashboard.component';
import { ProductCardComponent } from './product-card/product-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieCardComponent,
    MovieDashboardComponent,
    ProductDashboardComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
