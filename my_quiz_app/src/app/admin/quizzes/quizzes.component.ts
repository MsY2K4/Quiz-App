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
      quizdescription: 'Test your self in  Angular framework.',
    },
    {
      quizname: 'Angular',
      quizdescription: 'Test your self in  Angular framework.',
    },
    {
      quizname: 'Angular',
      quizdescription: 'Test your self in  Angular framework.',
    },
    {
      quizname: 'Angular',
      quizdescription: 'Test your self in  Angular framework.',
    },
  ]
}
