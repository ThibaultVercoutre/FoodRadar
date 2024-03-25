import { Component, OnInit } from '@angular/core';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, FormsModule, ReactiveFormsModule, MatButtonModule],
})

export class LoginComponent{

  form: any = {
    email: null,
    password: null
  };

  constructor(private router: Router) { }

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

  ngOnInit(): void {

  }
}
