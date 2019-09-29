import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RequestsService } from '../services/requests.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-student-submit',
  templateUrl: './student-submit.page.html',
  styleUrls: ['./student-submit.page.scss'],
})
export class StudentSubmitPage implements OnInit {

  public id;
  public marks;
  private subscription;
  public data;
  public questionForm: FormGroup;

  constructor(private route: ActivatedRoute, public formBuilder: FormBuilder, private requesHandler: RequestsService, private navCtrl: NavController) {
    this.questionForm = formBuilder.group({
      assignmentName: [''],
      studentName: [''],
      questions: formBuilder.array([])
    });
    console.log(this.questionForm);
   }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.subscription = this.route.params.subscribe(data => {
      this.questionForm = this.formBuilder.group({
        assignmentName: [''],
        studentName: [''],
        questions: this.formBuilder.array([])
      });
      this.id = data.id;
      this.marks = data.marks;
      this.questionForm.controls.assignmentName.setValue = this.id;
      this.requesHandler.getAssignmentInfo({name: this.id}).subscribe(req => {
        this.data = req;
        const tempControl = this.questionForm.get('questions') as FormArray;
        this.data.forEach(element => {
          tempControl.push(this.formBuilder.group({
            answer: [''],
          }));
          console.log(this.questionForm);
      });
      });
    });
  }

  ionViewDidExit(){
    this.subscription.unsubscribe();
  }

  submit() {
    console.log(this.questionForm.getRawValue());
    this.requesHandler.submitAnser(this.questionForm.getRawValue()).subscribe(req => {
      console.log(req);
      this.navCtrl.navigateRoot('/student');
    });
  }
}
