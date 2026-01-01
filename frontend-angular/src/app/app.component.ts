import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component'; // ✔ Correct path

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, UserComponent], // ✔ include
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend Angular Integration';
}
