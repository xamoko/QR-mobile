import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  url: string;

  constructor(public navCtrl: NavController, private inAppBrowser: InAppBrowser) {
  }

  openWebPage(url: string)
  {
    const options: InAppBrowserOptions = 
    {
      zoom: 'no'
    }
    //url='http://www.jw.org';
    url = localStorage.getItem('url');
    const browser = this.inAppBrowser.create(url, '_self',options);

    //browser.on('').subscribe();
    browser.show();
    console.log('si');
  }

}
