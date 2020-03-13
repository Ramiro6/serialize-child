import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainModule} from './module/main/main.module';
import {MainRouterComponent} from './module/main/components/main-router/main-router.component';
import {AdminModule} from './module/admin/admin.module';

@NgModule({
  declarations: [
    AppComponent,
    MainRouterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule,
    AdminModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
