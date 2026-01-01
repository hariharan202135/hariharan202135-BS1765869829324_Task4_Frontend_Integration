import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';   // <-- Make sure this path exists

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = "https://hariharan202135-bs1765869829324-task4.onrender.com";  // Backend URL

  constructor(private http: HttpClient) { }

  // GET users (returns list of users)
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users`);
  }

  // ADD user
  addUser(data: User): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, data);
  }

  // DELETE user
  deleteUser(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/users/${id}`);
  }

}

