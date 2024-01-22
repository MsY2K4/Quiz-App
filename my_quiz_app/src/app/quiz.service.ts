import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private webReqService: WebRequestService) { }

  createQuiz(name: string, description: string){
   return this.webReqService.post('quiz', { quizname: name, quizdescription: description });
  }

  fetchQuizes() {
    return this.webReqService.get("quiz");
  }
  
  fetchQuestions(quizId: string) {
    return this.webReqService.get(`quiz/${quizId}/questions`);
  }
  addQuestion(quizId: string, question: any) {
    return this.webReqService.post(`quiz/${quizId}/questions`, question);
  }

}
