import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'account-app',
  styles  : [ require('./account.component.css') ] ,
  template: require('./account.component.html')
})
export class AccountComponent implements OnInit {
  model: any = {};
  loading = false;
  error = '';


  constructor(  private router: Router,) { }

  ngOnInit() {




  }

  createAccount() {

  }

  ngOnDestroy() {
    console.log('byebye account component');
  }
}
