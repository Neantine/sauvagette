import { Routes } from '@angular/router';


import { HomeComponent }  from  "./neantine/home/home.component";
import { ThankYouComponent } from  "./neantine/contactform/thankyou.component";
import { MiniChoeursComponent } from  "./neantine/minichoeurs/minichoeurs.component";
import { VoiceComponent } from  "./neantine/voice/voice.component";
import { DevelopmentComponent } from  "./neantine/development/development.component";
import { AccountComponent } from  "./neantine/account/account.component";

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'index', component: HomeComponent },
  { path: 'thankyou', component: ThankYouComponent },
  { path: 'dev', component: DevelopmentComponent },
  { path: 'minichoeurs', component: MiniChoeursComponent },
  { path: 'voice', component: VoiceComponent },
  //{ path: 'account', component: AccountComponent },
];
