import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, AbstractControl, AbstractControlOptions } from '@angular/forms';
import { SettingsService } from '../service/settings.service';
import { APIResponse } from 'src/app/model/apiresponse';
import { Message } from '../../messaging/message';
import { MessagingService } from '../../messaging/messaging.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordFormGroup: FormGroup
  constructor(private settingService: SettingsService, private messageService: MessagingService) { }


  ngOnInit() {
    const controls = {
      "oldPassword": new FormControl("", [Validators.required, Validators.minLength(6)]),
      "password": new FormControl("", [Validators.required, Validators.minLength(6)]),
      "confirmPassword": new FormControl("", [Validators.required, Validators.minLength(6)]),
    };
    const globalValidations: AbstractControlOptions = {
      validators: [
        validateNewAndOldPasswordMatch,
        validateConfirmPassword,
      ],
      asyncValidators: null,
      updateOn: "blur"
    };
    this.changePasswordFormGroup = new FormGroup(controls, globalValidations);
  }


  getFormGroupControls() {
    return this.changePasswordFormGroup.controls;
  }

  chanPassgeword(): void {
    if (this.changePasswordFormGroup.valid) {
      let subscribe = this.settingService.changePasword(this.changePasswordFormGroup.value)
        .subscribe((apiresponse: APIResponse) => {
          if (apiresponse) {
            let message = new Message();
            message.autoClose = true;
            message.timeinMills = 1000 * 5;
            message.messages = [apiresponse.message.toString()]
            this.messageService.addMessage(message);
            this.changePasswordFormGroup.reset();
          }
          subscribe.unsubscribe()
        })
    }
  }
}



function validateConfirmPassword(f: AbstractControl): ValidationErrors | null {
  // console.log("Inside validateConfirmPassword")
  const passwordControl: AbstractControl = f.get('password');
  const confirmPasswordControl: AbstractControl = f.get('confirmPassword');
  // console.log(passwordControl.value + " === " + confirmPasswordControl.value)
  if (!passwordControl.pristine && passwordControl.valid && !confirmPasswordControl.pristine && confirmPasswordControl.valid)
    // if (!passwordControl.pristine && !confirmPasswordControl.pristine)
    return passwordControl.value === confirmPasswordControl.value ? null : { 'mismatchConfirmPassword': "Passwords mismatched" };
  return null;
}
function validateNewAndOldPasswordMatch(f: AbstractControl): ValidationErrors | null {
  console.log("Inside validateNewAndOldPasswordMatch")
  const passwordControl: AbstractControl = f.get('password');
  const oldPasswordControl: AbstractControl = f.get('oldPassword');
  if (!passwordControl.pristine && passwordControl.valid && !oldPasswordControl.pristine && oldPasswordControl.valid)
    return passwordControl.value === oldPasswordControl.value ? { 'matchOldAndNewPassword': "Old and new password should not be equal" } : null;
  return null;
}


