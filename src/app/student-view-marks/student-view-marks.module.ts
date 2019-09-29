import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { StudentViewMarksPage } from './student-view-marks.page';

const routes: Routes = [
  {
    path: '',
    component: StudentViewMarksPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [StudentViewMarksPage]
})
export class StudentViewMarksPageModule {}
