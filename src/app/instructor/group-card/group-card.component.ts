import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import * as M from "materialize-css/dist/js/materialize";
import { Group } from 'src/app/models/group';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ForumEditModal } from './edit-forum-modal';
import { GroupsService } from 'src/app/groups.service';
import { FilesService } from 'src/app/files.service';
import { ImageSnippet } from 'src/app/models/imagesnippet';
import { InstructorDashboardComponent } from '../instructor-dashboard/instructor-dashboard.component';
import { InstructorGroupComponent } from '../instructor-group/instructor-group.component';

@Component({
  selector: 'app-group-card',
  templateUrl: './group-card.component.html',
  styleUrls: ['./group-card.component.css']
})
export class GroupCardComponent {
  @Input() group: Group;
  previewImage: any;
  selectedFile: ImageSnippet;

  openDialog(): void {
    const dialogRef = this.dialog.open(ForumEditModal, {
      width: '50%',
      data: this.group
    });
  }
  constructor (
    private router: Router, 
    private groupsService: GroupsService, 
    private filesService: FilesService,
    public dashboard: InstructorDashboardComponent,
    private dialog: MatDialog
  ) { }

  goToGroupDashboard(groupId: number){
    console.log(groupId);
    this.router.navigate(['instructor/group/',groupId]);  
  }
}

