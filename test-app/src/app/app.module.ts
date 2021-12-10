import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { PortalModule }  from '@angular/cdk/portal';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    BankAccountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PortalModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }