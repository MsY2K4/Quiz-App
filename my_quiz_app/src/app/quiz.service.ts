import { Injectable } from '@angular/core';
import { WebRequestService } from './web-request.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private webReqSrevice: WebRequestService) { }

  createQuiz(name: string, description: string){
   return this.webReqSrevice.post('quiz', { quizname: name, quizdescription: description });
  }

  fetchQuizes() {
    return this.webReqSrevice.get("quiz");
  }
}
