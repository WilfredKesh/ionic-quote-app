import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FavoritesPage } from '../pages/favorites/favorites';
import { TabsPage} from '../pages/tabs/tabs';
import { LibraryPage} from "../pages/library/library";
import { QuotesPage } from "../pages/quotes/quotes";
import {QuotesService} from "../services/quotes";
import {QuotePage} from "../pages/quote/quote";
import { SettingsPage} from "../pages/settings/settings";
import {SettingsService} from "../services/settings";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    TabsPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    FavoritesPage,
    TabsPage,
    LibraryPage,
    QuotesPage,
    QuotePage,
    SettingsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, QuotesService, SettingsService]
})
export class AppModule {}
