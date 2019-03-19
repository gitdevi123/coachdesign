import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'registration', loadChildren: './registration/registration.module#RegistrationPageModule' },
  { path: 'registration-verification', loadChildren: './registration-verification/registration-verification.module#RegistrationVerificationPageModule' },
  { path: 'select-country', loadChildren: './select-country/select-country.module#SelectCountryPageModule' },
  { path: 'schedule', loadChildren: './schedule/schedule.module#SCHEDULEPageModule' },
  { path: 'filter-by-sport', loadChildren: './filter-by-sport/filter-by-sport.module#FilterBySportPageModule' },
  { path: 'view-all-classes', loadChildren: './view-all-classes/view-all-classes.module#ViewAllClassesPageModule' },
  { path: 'forgot-password', loadChildren: './forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  { path: 'public-profile-settings', loadChildren: './public-profile-settings/public-profile-settings.module#PublicProfileSettingsPageModule' },
  { path: 'coach-profile', loadChildren: './coach-profile/coach-profile.module#CoachProfilePageModule' },
  { path: 'cv', loadChildren: './cv/cv.module#CVPageModule' },
  { path: 'edit-cv', loadChildren: './edit-cv/edit-cv.module#EditCVPageModule' },
  { path: 'attendance', loadChildren: './attendance/attendance.module#ATTENDANCEPageModule' },
  { path: 'set-utr', loadChildren: './set-utr/set-utr.module#SetUTRPageModule' },
  { path: 'evaluation', loadChildren: './evaluation/evaluation.module#EvaluationPageModule' },
  { path: 'add-video', loadChildren: './add-video/add-video.module#AddVideoPageModule' },
  { path: 'add-video-step1', loadChildren: './add-video-step1/add-video-step1.module#AddVideoStep1PageModule' },
  { path: 'add-video-reference', loadChildren: './add-video-reference/add-video-reference.module#AddVideoReferencePageModule' },
  { path: 'timeblocking', loadChildren: './timeblocking/timeblocking.module#TimeblockingPageModule' },
  { path: 'blocktime', loadChildren: './blocktime/blocktime.module#BlocktimePageModule' },
  { path: 'blockdate', loadChildren: './blockdate/blockdate.module#BlockdatePageModule' },
  { path: 'datepick', loadChildren: './datepick/datepick.module#DatepickPageModule' },
  { path: 'blocktime2', loadChildren: './blocktime2/blocktime2.module#Blocktime2PageModule' },
 
  { path: 'blocktimerecurring1', loadChildren: './blocktimerecurring1/blocktimerecurring1.module#Blocktimerecurring1PageModule' },
  { path: 'blocktimerecurring2', loadChildren: './blocktimerecurring2/blocktimerecurring2.module#Blocktimerecurring2PageModule' },
  { path: 'blocktimerecurring3', loadChildren: './blocktimerecurring3/blocktimerecurring3.module#Blocktimerecurring3PageModule' },
  { path: 'settings1', loadChildren: './settings1/settings1.module#Settings1PageModule' },
  { path: 'settings2', loadChildren: './settings2/settings2.module#Settings2PageModule' },
  { path: 'settings3', loadChildren: './settings3/settings3.module#Settings3PageModule' },
  { path: 'blocktimerecurring4', loadChildren: './blocktimerecurring4/blocktimerecurring4.module#Blocktimerecurring4PageModule' },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
