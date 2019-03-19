import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { Blocktime2Page } from './blocktime2.page';

const routes: Routes = [
  {
    path: '',
    component: Blocktime2Page
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [Blocktime2Page]
})
export class Blocktime2PageModule {}
