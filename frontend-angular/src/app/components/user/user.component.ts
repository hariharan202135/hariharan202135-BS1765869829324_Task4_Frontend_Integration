import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';     // <-- important for ngModel
import { CommonModule } from '@angular/common';   // <-- needed for *ngFor
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  imports: [FormsModule, CommonModule]   // <-- add here
})
export class UserComponent {

  users: User[] = [];
  name: string = "";
  email: string = "";
  age: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data as User[];

    });
  }

  addUser() {
    if (!this.name || !this.email || !this.age) return;

    const newUser: User = {
      _id: Date.now().toString(),
      name: this.name,
      email: this.email,
      age: this.age,
    };

    this.userService.addUser(newUser).subscribe(() => {
      this.getUsers();
      this.name = "";
      this.email = "";
      this.age = null;
    });
  }

  deleteUser(id: string) {
    this.userService.deleteUser(id).subscribe(() => {
      this.getUsers();
    });
  }
}
