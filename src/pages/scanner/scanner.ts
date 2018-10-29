import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScannerOptions, BarcodeScanner } from '@ionic-native/barcode-scanner';


/**
 * Generated class for the ScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public scanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    /* console.log('ionViewDidLoad ScannerPage'); 
    this.options={
      prompt:'Coloque el código'
    };
    this.scanner.scan(this.options).then((data) => 
    {
      this.scannedData = data;
    }, (err) => 
    { 
      console.log('Error: ',err);
    })*/
  }

  scan()
  {
    this.options={
      prompt:'Coloque el código'
    };
    this.scanner.scan(this.options).then((data) => 
    {
      this.scannedData = data;

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
