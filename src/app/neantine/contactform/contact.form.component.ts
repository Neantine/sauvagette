/**
 * Created by Lilith on 30/01/2017.
 */
import {Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactFormSender } from '../../user/contact-form-sender'

import { Router } from '@angular/router';

@Component({
  selector: 'contact-form',
  styles  : [ require('./contact.form.component.css') ],
  template: require('./contact.form.component.html')
})

export class ContactFormComponent implements OnInit {

  contactForm : FormGroup;

  constructor(fb: FormBuilder, private contactFormSender:ContactFormSender, private router:Router) {

     this.contactForm = fb.group({
       'nom' : '',
       'email' : ['', Validators.compose([Validators.required, Validators.pattern(new RegExp('[^@]+@[^@]+\.[^@]+'))])],
       'dev' : false,
       'cours' : false,
    })

  }


  sendFormValue(value: any) {

    //console.log('FORM VALUE SUBMITTED :')
    //console.log(value);
    this.contactFormSender.sendFormValue(value).subscribe( res => { this.router.navigate(['thankyou']);/*console.log("component res: ", res);*/  /*this.contactForm.reset();*/ }

      ,
      err => {
        // Log errors if any
        console.log(err);
        this.contactForm.reset()
      });

    return;

  }

  ngOnInit()
  {
    //console.log('hello contactform component');
  }

  ngOnDestroy() {
    //console.log('byebye contactform component');
  }
}
