import { Component } from '@angular/core';
import { QuizService } from '../../quiz.service';

interface Quiz {
  quizname: string;
  quizdescription: string;
}

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {
  quizzes: Quiz[] = [];
  searchTerm: string = '';
  filteredQuizzes: any[] = [];

  constructor(private quizService:QuizService){
    this.quizService.fetchQuizes().subscribe((response : any)=>{
      (response as Quiz[]).forEach(res => this.quizzes.push(res));
      console.log(response);
    })
  }

  search() {
    this.filteredQuizzes = this.quizzes.filter(
      quiz =>
        quiz.quizname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        quiz.quizdescription.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
  createNewQuiz(){
    this.quizService.createQuiz('test', "tastour").subscribe((response : any)=>{
      this.quizzes.push(response as Quiz);
      console.log(response);
    })
  }
}
