import { NgModule } from '@angular/core';

import { UrlSanitizerPipe } from "./url-sanitizer";
import { HomeComponent } from "./home/home.component";
import { MiniChoeursComponent } from "./minichoeurs/minichoeurs.component";
import { VoiceComponent } from "./voice/voice.component";
import { DevelopmentComponent } from "./development/development.component";
import {ContactFormComponent} from "./contactform/contact.form.component";

import {CommonModule} from "../common.module";
import {ContactFormSender} from "../user/contact-form-sender"

@NgModule({
  declarations: [
    //LoginComponent,
    HomeComponent,
    MiniChoeursComponent,
    VoiceComponent,
    DevelopmentComponent,
    //AccountComponent,
    ContactFormComponent,
    UrlSanitizerPipe
  ],
  imports: [
    CommonModule.modules()
  ],
  providers: [
    ContactFormSender.PROVIDERS
  ]
})
export class NeantineModule {
}
