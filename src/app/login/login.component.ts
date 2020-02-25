import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  authFormGroup: FormGroup;
  constructor(private route: Router, private authService: AuthService) {
    this.authFormGroup = new FormGroup({
      "userName": new FormControl('', [Validators.required]),
      "password": new FormControl('', [Validators.required])
    });


  }
  login(): void {
    if (this.authFormGroup.valid) {
      this.authService.login(this.authFormGroup.value).subscribe((status) => {
        if (status) {
          this.route.navigate(['dashboard']);
        } else {
          this.authFormGroup.reset({
            'userName': '',
            'password': ''
          });
        }

      });

    }
  }



  ngOnInit() {
  }

}
