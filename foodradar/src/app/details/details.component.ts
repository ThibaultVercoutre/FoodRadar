import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { getAuth } from "firebase/auth";
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
})

export class DetailsComponent {

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
