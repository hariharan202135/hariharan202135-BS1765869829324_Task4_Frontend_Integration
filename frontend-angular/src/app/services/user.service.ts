import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // ⛔ Old:
  // private apiUrl = "http://localhost:5000";

  // ✅ New Render Backend URL
  private apiUrl = "https://hariharan202135-bs1765869829324-task4.onrender.com";

  constructor(private http: HttpClient) { }

  // Get all users
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  // Add a new user
  addUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, data);
  }

  // Delete user by id
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }
}
