import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'thx-app',
  styles  : [ require('./thankyou.component.css') ],
  template: require('./thankyou.component.html')
})

export class ThankYouComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // // get users from secure api end point
    // this.userStore.getUsers()
    //   .then(users => {
    //     this.users = users;
    //   });
  }


  ngOnDestroy() {
    //console.log('byebye `HomeComponent` component');
  }

}
