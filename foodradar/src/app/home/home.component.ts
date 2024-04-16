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
  // Define states for the navbar visibility
  //private states: string[] = ['hidden', 'shown'];

  // Initial state: hidden
  //private currentStateIndex = 0;

  // Property to bind to the ngClass directive in the template
  /*isNavVisible = false;

  toggleNavbar() {
    // Toggle the current state index
    this.currentStateIndex = (this.currentStateIndex + 1) % this.states.length;

    // Update the visibility based on the current state
    this.isNavVisible = this.states[this.currentStateIndex] === 'shown';
  }
*/
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
