import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {
  quizId: string | null = null;
  quizName: string = '';
  quizDescription: string = '';

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramId = params.get('quizId');
      if (paramId !== null) {
        this.quizId = paramId;
        this.fetchQuizInfo();
      }
    });
  }

  fetchQuizInfo() {
    if (this.quizId !== null) {
      this.quizService.fetchQuizInfo(this.quizId).subscribe(
        (response: any) => {
          this.quizName = response.quizname;
          this.quizDescription = response.quizdescription;
        },
        (error) => {
          console.error('Error fetching quiz information:', error);
        }
      );
    }
  }

  updateQuiz() {
    const quizName = (document.getElementById('quizName') as HTMLInputElement).value;
    const quizDescription = (document.getElementById('quizDescription') as HTMLInputElement).value;
    if (!quizName || !quizDescription) {
      alert('Please fill out all fields');
      return;
    }
    if (this.quizId !== null) {
      this.quizService.updateQuiz(this.quizId, this.quizName, this.quizDescription).subscribe(
        (response: any) => {
          console.log('Quiz updated successfully:', response);
          this.router.navigate(['/quizzes']);

        },
        (error) => {
          console.error('Error updating quiz:', error);
        }
      );
    }
  }
}
