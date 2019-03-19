import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Blocktimerecurring1Page } from './blocktimerecurring1.page';

const routes: Routes = [
  {
    path: '',
    component: Blocktimerecurring1Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Blocktimerecurring1Page]
})
export class Blocktimerecurring1PageModule {}
