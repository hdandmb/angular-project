import {
  Component,
  OnInit
} from '@angular/core';

import {
  User
} from '../../models/User';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {
  users: User[];
  showExtended = true;
  loaded = false;
  buttonAddNewUser = true;



  constructor() {}

  ngOnInit() {

    this.users = [
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        address: {
          street: '476 Yale ave',
          city: 'Spring Field',
          state: 'Co'
        },
        isActive: true,
        registered: new Date('06/03/2018 08:12:02' )
      },
      {
        firstName: 'Mary',
        lastName: 'Jameson',
        age: 56,
        address: {
          street: '31 Cole st',
          city: 'New York',
          state: 'NY'
        },
        isActive: true,
        registered: new Date('12/28/2016 03:16:18' )
      },
      {
        firstName: 'Latesha',
        lastName: 'Banks',
        age: 22,
        address: {
          street: '4019 Kakashi st',
          city: 'Denver',
          state: 'Co'
        },
        isActive: false,        registered: new Date('07/02/2017 06:23:31' )
      }
    ];

    this.loaded = true;

  }

  addUser(user: User) {
    this.users.push(user);
  }

}
