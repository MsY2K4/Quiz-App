import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './index/home/home.component';
import { AboutComponent } from './index/about/about.component';
import { ContactComponent } from './index/contact/contact.component';
import { NavbarComponent } from './index/navbar/navbar.component';
import { FooterComponent } from './index/footer/footer.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { QuizzesComponent } from './admin/quizzes/quizzes.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewQuizComponent } from './admin/new-quiz/new-quiz.component';
import { NavigateQuizzesComponent } from './user/navigate-quizzes/navigate-quizzes.component';
import { QuizDetailsComponent } from './admin/quiz-details/quiz-details.component';
import { AddQuestionsComponent } from './admin/add-questions/add-questions.component';
import { UpdateQuizComponent } from './admin/update-quiz/update-quiz.component';
import { TakeQuizComponent } from './user/take-quiz/take-quiz.component';



const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"footer", component:FooterComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"quizzes", component: QuizzesComponent},
  { path: 'quizzes/:quizId', component: QuizDetailsComponent },
  {path:"NewQuiz", component: NewQuizComponent},
  {path :"navigation" , component : NavigateQuizzesComponent},
  { path: 'quizzes/:quizId/add-questions', component: AddQuestionsComponent },
  { path: 'quizzes/:quizId/update-quiz', component: UpdateQuizComponent },
  { path: 'quizzes/:quizId/take', component: TakeQuizComponent },





  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
