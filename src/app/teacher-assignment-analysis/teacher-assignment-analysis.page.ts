import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { RequestsService } from '../services/requests.service';

@Component({
  selector: 'app-teacher-assignment-analysis',
  templateUrl: './teacher-assignment-analysis.page.html',
  styleUrls: ['./teacher-assignment-analysis.page.scss'],
})
export class TeacherAssignmentAnalysisPage implements OnInit {

  public id;
  public marks;
  private subscription;
  public data;

  constructor(private route: ActivatedRoute, private requestHandler: RequestsService) {
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.subscription = this.route.params.subscribe(data => {
      this.id = data.id;
      this.marks = data.marks;
      this.requestHandler.getStudsForAssignments({name: this.id}).subscribe(req => {
        console.log(req);
        this.data = req;
      });
      // Get Assignment
      // this.data = [{
      //   student: 'Abc',
      //   marks: 20,
      // }, {
      //   student: 'Abc',
      //   marks: 90,
      // }, {
      //   student: 'Abc',
      //   marks: 20,
      // }];
    });
    // this.id = this.route.paramMap.get('id');
    // console.log(this.id);
  }

  ionViewDidExit(){
    this.subscription.unsubscribe();
  }

}
