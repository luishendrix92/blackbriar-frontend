import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Group} from '../../../app/models/group';

@Injectable({
  providedIn: 'root'
})
export class EndpointsService {

  userId = localStorage.getItem('userId');

  constructor(private http:HttpClient) { }

  get_StudentRegisteredGroups(){
  
    var userId = localStorage.getItem("userId");
    var studentsRegisteredGroupsAPI = `https://api.blackbriar.site/api/users/${this.userId}/groups/subscribed`;

    let token = "Bearer " + localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
  })
    
    return this.http.get<Group[]>(studentsRegisteredGroupsAPI, { headers: headers });
  }

  get_AllGroups(){
    //var userId = "KbgSRGca21WWzyJ901xNKGeQk2kOfW";
    var AllGroupsAPI = 'https://api.blackbriar.site/api/groups';
    let token = "Bearer " + localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
   })
    return this.http.get<Group[]>(AllGroupsAPI, { headers: headers });
  }

  joinGroup(groupId: number)
  {
    var membershipGroupAPI = 'https://api.blackbriar.site/api/memberships';
    let jsonCoded = { groupId: groupId };
    let token = "Bearer " + localStorage.getItem("token");
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': token
   })
    return this.http.post(membershipGroupAPI, jsonCoded, { headers: headers });
  }

}