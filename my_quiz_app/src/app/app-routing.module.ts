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

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"contact", component:ContactComponent},
  {path:"navbar", component:NavbarComponent},
  {path:"footer", component:FooterComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent},
  {path:"quizzes", component: QuizzesComponent},
  {path:"NewQuiz", component: NewQuizComponent},






  { path: '',   redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
