import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewAllClassesPage } from './view-all-classes.page';

const routes: Routes = [
  {
    path: '',
    component: ViewAllClassesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewAllClassesPage]
})
export class ViewAllClassesPageModule {}
