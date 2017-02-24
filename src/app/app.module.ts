import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { FavoritesPage } from '../pages/favorites/favorites';
import { TabsPage} from '../pages/tabs/tabs';
import { LibraryPage} from "../pages/library/library";
import { QuotesPage } from "../pages/quotes/quotes";

@NgModule({
  declarations: [
    MyApp,
    FavoritesPage,
    TabsPage,
    LibraryPage,
    QuotesPage
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
    QuotesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
