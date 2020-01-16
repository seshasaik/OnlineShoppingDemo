import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserGender } from '../model/user-gender.enum'
import { SignUpService } from './sign-up.service';
import { User } from '../model/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  userEnum: UserGender;



  constructor(private signUpService: SignUpService) { }

  ngOnInit() {
    this.userEnum = UserGender.MALE;

    this.signUpForm = new FormGroup({
      "firstName": new FormControl('', Validators.required),
      "middleName": new FormControl(''),
      "lastName": new FormControl('', Validators.required),
      "gender": new FormControl('', Validators.required),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "mobile": new FormControl('', Validators.required),
      "userName": new FormControl('', Validators.required),
      "password": new FormControl('', Validators.required),
      "address": new FormControl('', Validators.required),
    })
  }

  register(): void {
    if (this.signUpForm.valid) {
      let user: User = this.signUpForm.value;
      user.selfRegistration = true;
      this.signUpService.signUp(user);
    }
  }



}
