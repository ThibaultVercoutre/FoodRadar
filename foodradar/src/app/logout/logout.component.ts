import { Component, inject } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css',
  standalone: true,
  imports: [MatButtonModule],
})
export class LogoutComponent {
  private auth = inject(Auth)
  constructor(private router: Router) {
    onAuthStateChanged(this.auth, user=>{console.log(user)})
  }


  public signOut() {
    return signOut(this.auth).then(() => {
      this.router.navigate(['/home']);
    });
  }
}
