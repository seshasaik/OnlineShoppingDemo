import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControlName, FormControl, Validators, ValidationErrors, AbstractControl, AbstractControlOptions } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {

  changePasswordFormGroup: FormGroup
  constructor() { }


  ngOnInit() {
    const controls = {
      "oldPassword": new FormControl("", [Validators.required, Validators.minLength(6)]),
      "newPassword": new FormControl("", [Validators.required, Validators.minLength(6)]),
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
}



function validateConfirmPassword(f: AbstractControl): ValidationErrors | null {
  // console.log("Inside validateConfirmPassword")
  const newPasswordControl: AbstractControl = f.get('newPassword');
  const confirmPasswordControl: AbstractControl = f.get('confirmPassword');
  // console.log(newPasswordControl.value + " === " + confirmPasswordControl.value)
  if (!newPasswordControl.pristine && newPasswordControl.valid && !confirmPasswordControl.pristine && confirmPasswordControl.valid)
    // if (!newPasswordControl.pristine && !confirmPasswordControl.pristine)
    return newPasswordControl.value === confirmPasswordControl.value ? null : { 'mismatchConfirmPassword': "Passwords mismatched" };
  return null;
}
function validateNewAndOldPasswordMatch(f: AbstractControl): ValidationErrors | null {
  console.log("Inside validateNewAndOldPasswordMatch")
  const newPasswordControl: AbstractControl = f.get('newPassword');
  const oldPasswordControl: AbstractControl = f.get('oldPassword');
  if (!newPasswordControl.pristine && newPasswordControl.valid && !oldPasswordControl.pristine && oldPasswordControl.valid)
    return newPasswordControl.value === oldPasswordControl.value ? { 'matchOldAndNewPassword': "Old and new password should not be equal" } : null;
  return null;
}


