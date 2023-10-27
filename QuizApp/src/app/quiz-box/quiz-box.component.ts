import { Component } from '@angular/core';
import {ServiceService} from '../service.service'

@Component({
  selector: 'app-quiz-box',
  templateUrl: './quiz-box.component.html',
  styleUrls: ['./quiz-box.component.css']
})
export class QuizBoxComponent {
  QuestionArr:any=[];
  constructor(private QuizJson:ServiceService){}
  ngOnInit() { 
    this.QuizJson.getData().subscribe((data)=>{
      console.log(data);
      this.QuestionArr.push(data)
    } );
  }
}
