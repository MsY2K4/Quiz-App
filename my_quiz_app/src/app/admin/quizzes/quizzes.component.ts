import { Component } from '@angular/core';

@Component({
  selector: 'app-quizzes',
  templateUrl: './quizzes.component.html',
  styleUrl: './quizzes.component.css'
})
export class QuizzesComponent {
  quizzes = [
    {
      quizname: 'Angular',
      quizdescription: 'Test yourself in Angular framework.',
    },
    {
      quizname: 'React',
      quizdescription: 'Test yourself in React framework.',
    },
    {
      quizname: 'Vue',
      quizdescription: 'Test yourself in Vue framework.',
    },
    {
      quizname: 'JavaScript',
      quizdescription: 'Test yourself in JavaScript.',
    },
  ]
  searchTerm: string = '';
  filteredQuizzes: any[] = [];

  search() {
    this.filteredQuizzes = this.quizzes.filter(
      quiz =>
        quiz.quizname.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        quiz.quizdescription.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  
}
