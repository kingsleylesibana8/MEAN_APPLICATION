import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import {UserDetailsService} from './shared/services/user-details.service';
import { HomeComponent } from './home/home.component';
import { CookieService } from 'ngx-cookie-service';
import {ToastModule} from 'ng2-toastr/ng2-toastr';

const appRoutes: Routes = [
  {
    path: 'register',
    component: UserRegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: 'home',
    component: HomeComponent
  },
  { path: '',
    component: LoginComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserRegistrationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    ToastModule.forRoot()
  ],
  providers: [UserDetailsService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
