import { Component, inject } from '@angular/core';
import { Auth, onAuthStateChanged, signOut } from '@angular/fire/auth';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  private auth = inject(Auth)
  constructor() {
    onAuthStateChanged(this.auth, user=>{console.log(user)})
  }

  public signOut() {
    return signOut(this.auth).then(() => {
    });
  }
}
