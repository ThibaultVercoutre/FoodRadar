import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, CommonModule],
})

export class SigninComponent {
   
  email: string | null = 'No email';
  isConnected: boolean = false;
  form: any = {
    email: null,
    password: null,
  };
  auth = getAuth();
  user = this.auth.currentUser;

  constructor(private router: Router) { 
    if (this.user) {
      this.email = this.user.email;
      this.isConnected = true;
    }
  }

  // Méthode pour rediriger vers la route /signin
  redirectToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    console.log(this.form.email, this.form.password);
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        sendEmailVerification(user)
          .then(() => {
            // Email de vérification envoyé
            this.router.navigate(['/login']);
          })
          .catch((error) => {
            // Gérez les erreurs ici
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
  }

  
  redirect(page: string) {
    this.router.navigate([page]);
  }

  ngOnInit(): void {

  }

}
