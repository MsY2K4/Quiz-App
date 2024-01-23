import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private webReqService: WebRequestService) { }
  //QUIZ
  createQuiz(name: string, description: string){
   return this.webReqService.post('quiz', { quizname: name, quizdescription: description });
  }

  fetchQuizes() {
    return this.webReqService.get("quiz");
  }
  deleteQuiz(quizId: string) {
    return this.webReqService.delete(`quiz/${quizId}`);
  }
  //QUESTION
  fetchQuestions(quizId: string) {
    return this.webReqService.get(`quiz/${quizId}/questions`);
  }
  addQuestion(quizId: string, question: any) {
    return this.webReqService.post(`quiz/${quizId}/questions`, question);
  }
  deleteQuestion(quizId: string, questionId: string) {
    return this.webReqService.delete(`quiz/${quizId}/questions/${questionId}`);
  }
}
