/**
 * Created by Administrateur on 29/09/2016.
 */

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';


@NgModule({})
export class CommonModule {

  static modules() {
    return [
      BrowserModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpModule,
      JsonpModule,
      MaterialModule.forRoot()
    ];
  }

}
