import { ValidatorFn, AbstractControl } from '@angular/forms';

export function confirmPasswordValidation(password: string): ValidatorFn {
  return (control: AbstractControl): {} => {
    const same = password === control.value;
    return same;
  };
}
