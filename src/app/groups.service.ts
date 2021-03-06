import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Group } from './models/group';
import { User } from './models/user';

@Injectable({
  providedIn: 'root'
})
export class GroupsService {

  constructor(private http: HttpClient) {
    console.log("grupos");
  }

  getInstructorGroups() {
    var userId = localStorage.getItem("userId");

    return this.http.get<Group[]>(`https://blackbriar.herokuapp.com/api/groups/owned`);
  }

  addGroupService(title, description, image, publicGroup) {
    return this.http.post<Group>(`https://blackbriar.herokuapp.com/api/groups`, {
      title: title,
      description: description,
      image: image,
      publicGroup: publicGroup
    });
  }

  editGroupService(description, image, publicGroup, groupId) {
    return this.http.put<Group>(`https://blackbriar.herokuapp.com/api/groups/${groupId}`, {
      description: description,
      image: image,
      publicGroup: publicGroup
    });
  }

  deleteGroupService(groupId){
    return this.http.delete<Group>(`https://blackbriar.herokuapp.com/api/groups/${groupId}`, {
    });
  }

  getOneGroup(groupId: number) {
    var groupForums = `https://blackbriar.herokuapp.com/api/groups/${groupId}`;
    return this.http.get<Group>(groupForums);
  }

  getStudentsOfGroup(groupId: number) {
    var groupForums = `https://blackbriar.herokuapp.com/api/groups/${groupId}/students`;
    return this.http.get<User[]>(groupForums);
  }
}
