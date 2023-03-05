import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  email: string = '';
  password: string = '';

  constructor(private auth: AngularFireAuth) {}

  login() {
    if(!this.email || !this.password){
      return alert('Fields cannot be empty and must valid');
    }
    this.auth.signInWithEmailAndPassword(this.email, this.password)
      .then(userCredential => {
        alert('successfully login');
      })
      .catch(error => {
        alert('error');
      });
  }
}
