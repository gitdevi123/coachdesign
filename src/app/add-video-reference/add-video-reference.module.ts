import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AddVideoReferencePage } from './add-video-reference.page';

const routes: Routes = [
  {
    path: '',
    component: AddVideoReferencePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddVideoReferencePage]
})
export class AddVideoReferencePageModule {}
