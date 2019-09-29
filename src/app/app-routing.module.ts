import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'teacher',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'student', loadChildren: './student/student.module#StudentPageModule' },
  { path: 'teacher', loadChildren: './teacher/teacher.module#TeacherPageModule' },
  { path: 'create-assignment', loadChildren: './create-assignment/create-assignment.module#CreateAssignmentPageModule' },
  { path: 'teacher-assignment-analysis/:id/:marks', loadChildren: './teacher-assignment-analysis/teacher-assignment-analysis.module#TeacherAssignmentAnalysisPageModule' },
  { path: 'student-submit/:id/:marks', loadChildren: './student-submit/student-submit.module#StudentSubmitPageModule' },
  { path: 'student-view-marks', loadChildren: './student-view-marks/student-view-marks.module#StudentViewMarksPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
