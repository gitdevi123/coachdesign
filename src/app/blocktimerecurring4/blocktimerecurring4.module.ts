import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Blocktimerecurring4Page } from './blocktimerecurring4.page';

const routes: Routes = [
  {
    path: '',
    component: Blocktimerecurring4Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Blocktimerecurring4Page]
})
export class Blocktimerecurring4PageModule {}
