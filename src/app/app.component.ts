import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  public switch;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },
    {
      title: 'Teacher',
      url: '/teacher',
      icon: 'list'
    },
    {
      title: 'Student',
      url: '/student',
      icon: 'list'
    }
  ];

  public teacherPages = [
    {
      title: 'Dashboard',
      url: '/teacher',
      icon: 'list'
    },
    {
      title: 'Add Question',
      url: '/create-assignment',
      icon: 'list'
    },
  ];

  public studentPages = [
    {
      title: 'Dashboard',
      url: '/student',
      icon: 'list'
    },
    {
      title: 'View Marks',
      url: '/student-view-marks',
      icon: 'list'
    },
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  test(){
    const url = this.router.url;
    if(url.includes('teacher') || url.includes('create')){
      this.switch =false;
    } else {
      this.switch = true;
    }

    
  }
}
