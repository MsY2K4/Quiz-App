import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';



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
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewQuizComponent } from './admin/new-quiz/new-quiz.component';
import { NavigateQuizzesComponent } from './user/navigate-quizzes/navigate-quizzes.component';
import { QuizDetailsComponent } from './admin/quiz-details/quiz-details.component';
import { AddQuestionsComponent } from './admin/add-questions/add-questions.component';
import { UpdateQuizComponent } from './admin/update-quiz/update-quiz.component';
import { TakeQuizComponent } from './user/take-quiz/take-quiz.component';
import { AdminNavComponent } from './admin/admin-nav/admin-nav.component';
import { UserNavComponent } from './user/user-nav/user-nav.component';

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
    QuizzesComponent,
    PageNotFoundComponent,
    NewQuizComponent,
    NavigateQuizzesComponent,
    QuizDetailsComponent,
    AddQuestionsComponent,
    UpdateQuizComponent,
    TakeQuizComponent,
    AdminNavComponent,
    UserNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
