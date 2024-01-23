import { Component } from '@angular/core';
import { QuizService } from '../../quiz.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-quiz',
  templateUrl: './new-quiz.component.html',
  styleUrl: './new-quiz.component.css'
})
export class NewQuizComponent {


  constructor(private route: ActivatedRoute,private quizService:QuizService,private router: Router){
    
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
        this.router.navigate(['/quizzes']);

      },
      (error) => {
        console.error(error);
        alert('Error creating quiz. Please try again.');
      }
    );
  }
}