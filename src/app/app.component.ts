import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Login',
      url: '/login',
      icon: 'home'
    },
    {
      title: 'Registration',
      url: '/registration',
      icon: 'Registration'
    },
    {
      title: 'Registration Verification',
      url: '/registration-verification',
      icon: 'Registration Verification'
    },
    {
      title: 'Select Country',
      url: '/select-country',
      icon: 'Select Country'
    },
    {
      title: 'Schedule',
      url: '/schedule',
      icon: 'schedule'
    },
    {
      title: 'Filter by Sport',
      url: '/filter-by-sport',
      icon: 'filter by sport'
    },
    {
      title: 'View All Classes',
      url: '/view-all-classes',
      icon: 'View All Classes'
    },
    {
      title: 'Forgot Password',
      url: '/forgot-password',
      icon: 'Forgot Password'
    },
    {
      title: 'Forgot Password',
      url: '/forgot-password',
      icon: 'Forgot Password'
    },

    {
      title: 'Public Profile Settings',
      url: '/public-profile-settings',
      icon: 'Public Profile Settings'
    },

    {
      title: 'Coach Profile',
      url: '/coach-profile',
      icon: 'Coach Profile'
    },

    {
      title: 'CV',
      url: '/cv',
      icon: 'CV'
    },

    {
      title: 'EDIT CV',
      url: '/edit-cv',
      icon: 'CV'
    },

    {
      title: 'ATTENDANCE',
      url: '/attendance',
      icon: 'ATTENDANCE'
    },

    {
      title: 'Set UTR',
      url: '/set-utr',
      icon: 'Set UTR'
    },

    {
      title: 'EVALUATION',
      url: '/evaluation',
      icon: 'EVALUATION'
    },

    {
      title: 'ADD VIDEO',
      url: '/add-video',
      icon: 'ADD VIDEO'
    },

    {
      title: 'ADD VIDEO STEP1',
      url: '/add-video-step1',
      icon: 'ADD VIDEO STEP1'
    },
   
    {
      title: 'ADD VIDEO REFERENCE',
      url: '/add-video-reference',
      icon: 'ADD VIDEO REFERENCE'
    },
    {
      title: 'TIME BLOCKING',
      url: '/timeblocking',
      icon: 'timeblocking'
    },
    
    {
      title: 'BLOCK TIMING',
      url: '/blocktime',
      icon: 'blocktiming'
    },
    {
      title: 'BLOCK DATE',
      url: '/blockdate',
      icon: 'blockdate'
    },

    {
      title: 'BLOCK TIME2',
      url: '/blocktime2',
      icon: 'blocktime2'
    },

    {
      title: 'BLOCK TIME Recurring1',
      url: '/blocktimerecurring1',
      icon: 'calendar'
    },
    {
      title: 'BLOCK TIME Recurring2',
      url: '/blocktimerecurring2',
      icon: 'calendar'
    },

    {
      title: 'BLOCK TIME Recurring3',
      url: '/blocktimerecurring3',
      icon: 'calendar'
    },
    {
      title: 'BLOCK TIME Recurring4',
      url: '/blocktimerecurring4',
      icon: 'calendar'
    },

    {
      title: 'Settings1',
      url: '/settings1',
      icon: 'calendar'
    },

    {
      title: 'Settings2',
      url: '/settings2',
      icon: 'calendar'
    },

    {
      title: 'Settings3',
      url: '/settings3',
      icon: 'calendar'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
   
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
