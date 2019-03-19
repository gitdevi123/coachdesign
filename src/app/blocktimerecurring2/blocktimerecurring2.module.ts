import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Blocktimerecurring2Page } from './blocktimerecurring2.page';

const routes: Routes = [
  {
    path: '',
    component: Blocktimerecurring2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Blocktimerecurring2Page]
})
export class Blocktimerecurring2PageModule {}
