import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddVideoStep1Page } from './add-video-step1.page';

const routes: Routes = [
  {
    path: '',
    component: AddVideoStep1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddVideoStep1Page]
})
export class AddVideoStep1PageModule {}
