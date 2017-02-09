import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'home-app',
  styles  : [ require('./home.component.css') ],
  template: require('./home.component.html')
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // // get users from secure api end point
    // this.userStore.getUsers()
    //   .then(users => {
    //     this.users = users;
    //   });
  }


  ngOnDestroy() {
    console.log('byebye `HomeComponent` component');
  }

}
