import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule, CommonModule],
})

export class LoginComponent{

  email: string | null = 'No email';
  isConnected: boolean = false;
  form: any = {
    email: null,
    password: null
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
  redirectToSignin() {
    this.router.navigate(['/signin']);
  }


  onSubmit(): void {
    console.log(this.form.email, this.form.password);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, this.form.email, this.form.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        this.router.navigate(['/home']);
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
