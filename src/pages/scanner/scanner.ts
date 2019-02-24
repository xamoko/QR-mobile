import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser, InAppBrowserOptions } from "@ionic-native/in-app-browser";


@IonicPage()
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html',
})
export class ScannerPage {

  options: BarcodeScannerOptions;
  encodText: string='';
  ecodedData: any=[];
  scannedData: any=[];
  url;

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner, private inAppBrowser: InAppBrowser) {
  }

  scan()
  {
    this.options={
      prompt:'Coloque el código'
    };
    this.scanner.scan(this.options).then((data) => 
    {
      this.scannedData = data;
      if (this.scannedData.text != '')
        {
              const options: InAppBrowserOptions = 
        {
          zoom: 'no',
          hidenavigationbuttons:'yes',
          hideurlbar:'yes'
        }
        this.url='http://www.jw.org';
        const browser = this.inAppBrowser.create(this.scannedData.text, '_blank',options);
        browser.show();
        console.log('si '+this.url);
        }

    }, (err) => 
    { 
      console.log('Error: ',err);
    })
  }

  encode()
  {
    this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.encodText).then((data) => 
    {
      this.ecodedData = data;
    }, (err) => 
    {
      console.log('Error: ',err);
    })
  }
}
