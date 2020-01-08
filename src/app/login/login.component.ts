import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authFormGroup: FormGroup;
  constructor(private route: Router, private authService : AuthService) {
    this.authFormGroup = new FormGroup({
      "EmailOrMobile": new FormControl('', [Validators.required]),
      "password": new FormControl('', [Validators.required])
    });


  }
  login(): void {
    if (this.authFormGroup.valid) {
      var user = new User();
      user.email = this.authFormGroup.get('EmailOrMobile').value;
      user.phone = this.authFormGroup.get('EmailOrMobile').value;
      user.password = this.authFormGroup.get("password").value;
      this.authService.login(user);

    }
  }



  ngOnInit() {
  }

}
