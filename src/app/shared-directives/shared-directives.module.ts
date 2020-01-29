import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnlyTwoDecimalInputDirective } from './_directives/only-two-decimal-input.directive';
import { OnlyNumbersDirective } from './_directives/only-numbers.directive';

@NgModule({
  declarations: [
    OnlyTwoDecimalInputDirective,
    OnlyNumbersDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OnlyTwoDecimalInputDirective,
    OnlyNumbersDirective
  ]
})
export class SharedDirectivesModule { }
