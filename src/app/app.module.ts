
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { GraphComponent } from './graph/graph.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { CurveComponent } from './curve/curve.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GraphComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    CurveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
