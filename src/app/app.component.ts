import { Component, ViewChild } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {SettingsPage} from "../pages/settings/settings";
import { TabsPage } from "../pages/tabs/tabs";




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;
  settingsPage = SettingsPage;
  tabsPage = TabsPage;
  @ViewChild('nav') nav: NavController;

  constructor(private menuCtrl: MenuController){

  }


onLoad(page: any){
  this.nav.setRoot(page);
  this.menuCtrl.close();
}

}
