import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-quiz-details',
  templateUrl: './quiz-details.component.html',
  styleUrls: ['./quiz-details.component.css']
})
export class QuizDetailsComponent implements OnInit {
  quizId: string | null = null; // Initialize quizId here
  questions: any[] = [];

  constructor(private route: ActivatedRoute, private quizService: QuizService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramId = params.get('quizId');
      if (paramId !== null) {
        this.quizId = paramId;
        this.fetchQuestions();
      }
    });
  }

  fetchQuestions() {
    if (this.quizId !== null) {
      this.quizService.fetchQuestions(this.quizId).subscribe((response: any) => {
        this.questions = response;
      });
    }
  }
}