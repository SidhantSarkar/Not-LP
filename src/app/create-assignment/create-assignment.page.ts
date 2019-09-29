import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { RequestsService } from '../services/requests.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.page.html',
  styleUrls: ['./create-assignment.page.scss'],
})
export class CreateAssignmentPage implements OnInit {

  public questionForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private requesHandler: RequestsService, private navCtrl: NavController) {
    this.questionForm = formBuilder.group({
      assignmentName: [''],
      maxMarks: [''],
      questions: formBuilder.array([formBuilder.group({
        question: [''],
        answer: [''],
        marks: [''],
      })])
    });
    console.log(this.questionForm);
    // this.addQuestion();
    // console.log(this.questionForm);
  }

  addQuestion() {
    const tempControl = this.questionForm.get('questions') as FormArray;
    tempControl.push(this.formBuilder.group({
      question: [''],
      answer: [''],
      marks: [''],
    }));
    console.log(this.questionForm);
  }

  submit() {
    console.log(this.questionForm.getRawValue());

    this.requesHandler.createAssignment(this.questionForm.getRawValue()).subscribe(res => {
      console.log(res);
      this.navCtrl.navigateRoot('/teacher');
    });
  }

  ngOnInit() {
  }

}
