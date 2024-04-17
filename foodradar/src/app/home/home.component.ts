import { COMPILER_OPTIONS, Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { getAuth } from "firebase/auth";
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
})

export class HomeComponent {
  email: string | null = 'No email';
  isConnected: boolean = false;

  auth = getAuth();
  user = this.auth.currentUser;

  constructor(private router: Router) {
    if (this.user) {
      this.email = this.user.email;
      this.isConnected = true;
    }
  }

  redirect(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit(): void {
  }
}
