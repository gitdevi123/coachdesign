import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Blocktimerecurring3Page } from './blocktimerecurring3.page';

const routes: Routes = [
  {
    path: '',
    component: Blocktimerecurring3Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Blocktimerecurring3Page]
})
export class Blocktimerecurring3PageModule {}
