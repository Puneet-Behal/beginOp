import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/index';
import { User } from '../../../models/user';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
 users :User[] =[];

  constructor(private store :Store<fromStore.State>) { 
    this.store
    .select(fromStore.SELECTS.data.users)
    .subscribe(users => (this.users = users))
  }

  ngOnInit() {
  }

}
