/**
 * Created by Lilith on 30/01/2017.
 */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'contact-form',
  styles  : [ require('./contact.form.component.css') ],
  template: require('./contact.form.component.html')
})
export class ContactFormComponent {

  contactForm : FormGroup;

  constructor(fb: FormBuilder){

     this.contactForm = fb.group({
       'pseudo' : '',
       'email' : '',
       'dev' : false,
       'cours' : false,
       'minichoeurs' : false,
    })
  }

  // Again we’ll implement our form submit function that will just console.log the results of our form
  submitForm(value: any):void{
    console.log('Reactive Form Data: ')
    console.log(value);
  }
}
