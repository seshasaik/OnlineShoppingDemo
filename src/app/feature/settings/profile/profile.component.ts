import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { SettingsService } from '../service/settings.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private settingService: SettingsService) {

  }
  user: User;
  profileFormGroup: FormGroup;

  ngOnInit() {
    // this.customer = this.activatedRoute.snapshot.data.customer;
    const subsribe = this.settingService.getProfile().subscribe((user) => {
      this.user = user;
      subsribe.unsubscribe();
      this.profileFormGroup.patchValue(this.user);
    });
    this.profileFormGroup = new FormGroup({
      "firstName": new FormControl('', [Validators.required]),
      "middleName": new FormControl(''),
      "lastName": new FormControl('', [Validators.required]),
      "gender": new FormControl('', [Validators.required]),
      "email": new FormControl('', [Validators.required, Validators.email]),
      "phone": new FormControl('', [Validators.required]),
      "address": new FormControl('', [Validators.required]),
    });

    

  }

  resetToOriginal(){
    this.profileFormGroup.patchValue(this.user);
  }

  updateProfile(): void {
    if (this.profileFormGroup.valid) {
      this.settingService.saveProfile(this.profileFormGroup.value);
    }
  }


  getFormGroupControls() {
    return this.profileFormGroup.controls;
  }

}
