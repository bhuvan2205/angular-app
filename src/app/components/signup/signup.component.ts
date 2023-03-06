import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  email: string = '';
  password: string = '';

  constructor(public auth: AngularFireAuth) {}

  signup() {
    this.auth.createUserWithEmailAndPassword(this.email, this.password)
      .then((res: any) => {
        alert('Signed in successfully!');
      })
      .catch((err: any) => {
        alert('Failed to sign in');
      });
  }
}
