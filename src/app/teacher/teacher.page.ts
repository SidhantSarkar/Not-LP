import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.page.html',
  styleUrls: ['./teacher.page.scss'],
})
export class TeacherPage implements OnInit {

  public assignments = [] as any;

  constructor(public navctlr: NavController, private requesHandler: RequestsService) {}

  ngOnInit() {
  }

  ionViewDidEnter(){
    // Observable
    this.requesHandler.getAssignments().subscribe(req => {
        this.assignments = req;
    });
  }

  openAssignment(assignmentId, totalMarks){
    console.log(assignmentId);
    this.navctlr.navigateForward('/teacher-assignment-analysis/' + assignmentId + '/' + totalMarks);
    // Get request
  }

  navigateForward(){
    this.navctlr.navigateForward('/create-assignment');
  }

}
