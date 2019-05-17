import { Component, OnInit, EventEmitter } from '@angular/core';
import {MaterializeAction } from 'angular2-materialize';
import {MatSelectModule} from '@angular/material/select';


import * as $ from 'jquery';

@Component({
  selector: 'app-navbar-instructor',
  templateUrl: './navbar-instructor.component.html',
  styleUrls: ['./navbar-instructor.component.css']
})
export class NavbarInstructorComponent implements OnInit {
  modalActions = new EventEmitter<string|MaterializeAction>();

  firstName = localStorage.getItem("firstName");
  lastName = localStorage.getItem("lastName");
  
  photo = localStorage.getItem('photo');
  

  constructor() { }

  ngOnInit()
  {
    document.addEventListener('DOMContentLoaded', function() {
      var elems = document.querySelectorAll('.dropdown-trigger');
      var instances = M.Dropdown.init(elems);
    });
  }


  openModal() {
    this.modalActions.emit({action:"dropdown",params:['open']});
  }
}
