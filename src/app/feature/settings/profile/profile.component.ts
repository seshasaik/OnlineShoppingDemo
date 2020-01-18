import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }
  user: User;
  profileFormGroup: FormGroup;

  ngOnInit() {
    // this.customer = this.activatedRoute.snapshot.data.customer;
    this.profileFormGroup = new FormGroup({
      "firstName": new FormControl('', [Validators.required]),
      "middelName": new FormControl(''),
      "lastName": new FormControl('', [Validators.required]),
      "gender": new FormControl('', [Validators.required]),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "phone": new FormControl('', [Validators.required]),
      "address": new FormControl('', [Validators.required]),
    });

  }
  getFormGroupControls() {
    return this.profileFormGroup.controls;
  }

}
