import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../Services/endpoints.service';
import { Group } from 'src/app/models/group';
import { InboxService } from '../../inbox.service';


@Component({
  selector: 'app-student-explore',
  templateUrl: './student-explore.component.html',
  styleUrls: ['./student-explore.component.css']
})
export class StudentExploreComponent implements OnInit {
  selectedValue: string;
  searchText: string = "";

  groups = [];
  groupsFilter = [];

  constructor(private endpoint: EndpointsService, private inboxService: InboxService) {

  }

  ngOnInit() {


    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
    this.endpoint.get_AllGroups().
      subscribe(
        data => {
          this.groups = data;
          this.groupsFilter = this.groups;
          console.log(this.groups);
        },
        error => {
          console.log("Error", error);
        }
      )
  }

  Search() {
    this.groups = this.groupsFilter;
    if (this.searchText != "") {
      this.groups = this.groups.filter(res => {
        return res.title.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
          || res.owner.firstName.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase())
          || res.owner.email.toLocaleLowerCase().match(this.searchText.toLocaleLowerCase());
      });
    }
    else if (this.searchText == "") {
      this.onChange();
    }
  }

  onChange() {
    console.log(this.selectedValue);
    switch (this.selectedValue) {
      case '1': {
        this.ngOnInit();
        break;
      }
      case '2': {
        this.groups = this.groupsFilter;
        this.groups = this.groups.filter(element => {
          return element.publicGroup === true;
        });
        break;
      }
      case '3': {
        this.groups = this.groupsFilter;
        this.groups = this.groups.filter(element => {
          return element.publicGroup === false;
        });
        break;
      }

    }

  }

}
