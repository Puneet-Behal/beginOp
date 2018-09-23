import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { User } from '../../../models/user';
import { Store } from '@ngrx/store';
import * as fromStore from '../../../store/index';


@Component({
  selector: 'userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  users: User[] = [
    {id :"1",name:"Shiv Prateek Sharma",category:"Guitarist",popularity:"7 *** "},
    {id :"2",name:"Ankit Majumdar",category:"Web Developer",popularity:"4 *** "},
    {id :"1",name:"Chinki Saxena",category:"Friend",popularity:"2 *** "}
   ];


  displayDialog: boolean;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(public store: Store<fromStore.State>) { 

    this.store.dispatch({ type: fromStore.storeActions.data.users, payload:this.users});
  }

  ngOnInit() {

      this.sortOptions = [
          {label: 'Newest First', value: '!year'},
          {label: 'Oldest First', value: 'year'},
          {label: 'Brand', value: 'brand'}
      ];
  }

  selectCar(event: Event) {
     
      this.displayDialog = true;
      event.preventDefault();
  }

  onSortChange(event) {
      let value = event.value;

      if (value.indexOf('!') === 0) {
          this.sortOrder = -1;
          this.sortField = value.substring(1, value.length);
      }
      else {
          this.sortOrder = 1;
          this.sortField = value;
      }
  }

  onDialogHide() {
     // this.selectedCar = null;
  }

}
