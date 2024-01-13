import { Component } from '@angular/core';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrl: './new-quiz.component.css'
})
export class NewQuizComponent {


  constructor(private quizService:QuizService){
    
  }
  createNewQuiz() {
    const quizName = (document.getElementById('quizName') as HTMLInputElement).value;
    const description = (document.getElementById('description') as HTMLInputElement).value;

    // Check if quizName and description valid
    if (!quizName || !description) {
      alert('Please fill out all fields');
      return;
    }

    this.quizService.createQuiz(quizName, description).subscribe(
      (response: any) => {
        console.log(response);
        alert('Quiz created successfully!');
      },
      (error) => {
        console.error(error);
        alert('Error creating quiz. Please try again.');
      }
    );
  }
}