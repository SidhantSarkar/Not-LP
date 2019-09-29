import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-student-view-marks',
  templateUrl: './student-view-marks.page.html',
  styleUrls: ['./student-view-marks.page.scss'],
})
export class StudentViewMarksPage implements OnInit {

  public data;
  constructor(private requestHandler: RequestsService) { }

  ngOnInit() {
  }

  getResults(item) {
    const id = item.el.value;
    this.requestHandler.getResults({name:id}).subscribe(req => {
      console.log(req);
      this.data = req;
    });
    // this.data = [
    //   {assignmentName: 'Test',
    //   studentName:'Name',
    //   maxMarks: 10,
    //   marks: 5,
    //   questions: [{
    //     question: 'question',
    //     marks: 2,
    //     maxMarks: 5,
    //     answer: 'answer'
    //   }]
    //   }
    // ];
  }

}
