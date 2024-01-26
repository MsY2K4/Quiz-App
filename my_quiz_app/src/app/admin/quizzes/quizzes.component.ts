import { Component } from '@angular/core';
import { QuizService } from '../../quiz.service';

interface Quiz {
  id: string;
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
  
  deleteQuiz(quizId: string) {
    this.quizService.deleteQuiz(quizId).subscribe(
      () => {
        this.quizzes = this.quizzes.filter((quiz) => quiz.id !== quizId);
        this.search();
        window.location.reload();
      }
    );
  }
  
}
