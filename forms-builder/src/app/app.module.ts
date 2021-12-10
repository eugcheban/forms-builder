import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionGeneralStylingComponent } from './section-general-styling/section-general-styling.component';
import { SectionFormBuilderComponent } from './section-form-builder/section-form-builder.component';
import { SectionDragFieldsComponent } from './section-drag-fields/section-drag-fields.component';

import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';

import { StoreModule } from '@ngrx/store';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    SectionGeneralStylingComponent,
    SectionFormBuilderComponent,
    SectionDragFieldsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      
    }),
    MatGridListModule,
    MatCardModule,
    DragDropModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
