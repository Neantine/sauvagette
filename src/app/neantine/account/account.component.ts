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
  // datepickerOpts = {
  //   startDate: new Date(2016, 5, 10),
  //   autoclose: true,
  //   todayBtn: 'linked',
  //   todayHighlight: true,
  //   assumeNearbyYear: true,
  //   format: 'D, d MM yyyy'
  // }
  date: Date = new Date(2016, 5, 10);
  date2: Date = new Date(2016, 5, 10);

  constructor(  private router: Router,) { }

  ngOnInit() {




  }

  createAccount() {

  }

  ngOnDestroy() {
    console.log('byebye account component');
  }
}
