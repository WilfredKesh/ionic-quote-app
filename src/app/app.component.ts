import { Component } from '@angular/core';

import { FavoritesPage } from "../pages/favorites/favorites";
import { TabsPage } from "../pages/tabs/tabs";




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = TabsPage;



}
