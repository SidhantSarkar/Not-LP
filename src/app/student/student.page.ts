import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.page.html',
  styleUrls: ['./student.page.scss'],
})
export class StudentPage implements OnInit {

  public assignments = [] as any;

  constructor(public navctlr: NavController, private requestHandler: RequestsService) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    // Observable
    this.requestHandler.getAssignments().subscribe(req => {
      this.assignments = req;
    });
    // this.assignments = [{
    //   name: 'Test 1',
    //   questions: 5,
    //   marks: 10,
    //   submissions: 2
    // }, {
    //   name: 'Test 2',
    //   questions: 3,
    //   marks: 100,
    //   submissions: 6
    // }, {
    //   name: 'Test 3',
    //   questions: 10,
    //   marks: 50,
    //   submissions: 8
    // }];
  }

  openAssignment(assignmentId, marks){
    this.navctlr.navigateForward('/student-submit/' + assignmentId + '/' + marks);
    // Get request
  }

}
