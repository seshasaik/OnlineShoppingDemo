import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Customer } from 'src/app/model/customer';
import { User } from 'src/app/model/user';
import { Router } from '@angular/router';
import { AuthService } from '../auth-service.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authFormGroup = new FormGroup({
    "EmailOrMobile": new FormControl('', [Validators.required]),
    "password": new FormControl('', [Validators.required])
  })
  constructor(private authService: AuthService, private route: Router) { }
  login(): void {
    if (this.authFormGroup.valid) {
      var user = new User();
      user.email = this.authFormGroup.get('EmailOrMobile').value;
      user.phone = this.authFormGroup.get('EmailOrMobile').value;
      user.password = this.authFormGroup.get("password").value;

      this.authService.validateUserCredentilas(user).subscribe((customer: Customer) => {
        this.route.navigate(['/dashboard']);
      }, (e) => {
        console.error(e);
      });
    }
  }



  ngOnInit() {
  }

}
