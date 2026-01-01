import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "https://hariharan202135-bs1765869829324-task4.onrender.com"; // your backend URL

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get(`${this.apiUrl}/users`);
  }

  addUser(data:any){
    return this.http.post(`${this.apiUrl}/users`, data);
  }

  deleteUser(id:any){
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

}
