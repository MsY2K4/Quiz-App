import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizService } from '../../quiz.service';

@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {
  quizId: string | null = null;
  questionText: string = '';
  answer: string = '';
  optionsString: string = '';
  options: string[] = [];

  constructor(private route: ActivatedRoute, private quizService: QuizService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const paramId = params.get('quizId');
      if (paramId !== null) {
        this.quizId = paramId;
      }
    });
  }

  addQuestion() {
    // Split optionsString into an array
    this.options = this.optionsString.split(',').map(option => option.trim());

    if (this.quizId !== null) {
      const newQuestion = {
        quizid: this.quizId,
        questionText: this.questionText,
        answer: this.answer,
        options: this.options
      };

      this.quizService.addQuestion(this.quizId, newQuestion).subscribe(() => {
        this.router.navigate(['/quizzes', this.quizId]);
      });
    }
  }
}
