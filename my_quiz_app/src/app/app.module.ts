import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './index/home/home.component';
import { AboutComponent } from './index/about/about.component';
import { ContactComponent } from './index/contact/contact.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { FooterComponent } from './index/footer/footer.component';
import { QuizzesComponent } from './admin/quizzes/quizzes.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    QuizzesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
