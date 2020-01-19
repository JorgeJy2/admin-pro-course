import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Routes
import { APP_ROUTES } from './app.routes';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';

import { PageModule } from './pages/pages.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
