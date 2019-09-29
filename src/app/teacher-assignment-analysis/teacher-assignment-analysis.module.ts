import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TeacherAssignmentAnalysisPage } from './teacher-assignment-analysis.page';

const routes: Routes = [
  {
    path: '',
    component: TeacherAssignmentAnalysisPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TeacherAssignmentAnalysisPage]
})
export class TeacherAssignmentAnalysisPageModule {}
