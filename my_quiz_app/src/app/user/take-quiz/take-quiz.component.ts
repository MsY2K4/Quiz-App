import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { QuizService } from '../../quiz.service';


@Component({
  selector: 'app-take-quiz',
  templateUrl: './take-quiz.component.html',
  styleUrls: ['./take-quiz.component.css']
})
export class TakeQuizComponent implements OnInit {
  quizId: string | null = null;
  questions: any[] = [];
  currentIndex = 0;
  currentQuestion: any;
  score = 0;

  constructor(private route: ActivatedRoute, private quizService: QuizService,private router: Router) { }

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
        this.questions = this.shuffleQuestions(response);
        this.currentQuestion = this.questions[0];
        this.randomizeOptions();
      });
    }
  }

  shuffleQuestions(questions: any[]): any[] {
    return questions.sort(() => Math.random() - 0.5);
  }

  randomizeOptions() {
    this.currentQuestion.options.push(this.currentQuestion.answer);
    this.currentQuestion.options = this.shuffleQuestions(this.currentQuestion.options);
  }

  nextQuestion() {
    this.currentIndex++;
    this.currentQuestion = this.questions[this.currentIndex];
    this.randomizeOptions();
  }

  answerQuestion(answer: string) {
    if (answer === this.currentQuestion.answer) {
      this.score++;
    }
  }

  finishQuiz() {
    console.log('Quiz score:', this.score);
    if(this.score>this.questions.length/2){
      alert("Congratulations! You have passed the Quiz with a score of "+this.score)
      this.router.navigate(['/navigation']);

    }
    else{
      alert("Hard luck next time your score is "+this.score)
      this.router.navigate(['/navigation']);

    }
  }
}
