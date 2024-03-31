import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes} from '@angular/router';

import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { NavComponent } from './container/nav/nav.component';

import { HomeComponent } from './container/home/home.component';
import { RegisterComponent } from './container/register/register.component';
import { SigninComponent } from './container/signin/signin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';


const appRoute:Routes =[
  {path: '', component: HomeComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'register', component: RegisterComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    NavComponent,
    HomeComponent,
    RegisterComponent,
    SigninComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
