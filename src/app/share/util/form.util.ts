import { AbstractControl, FormArray, FormControl, FormGroup } from "@angular/forms";

export function markAllControlsAsDirty(abstractControls: AbstractControl[]): void {
  abstractControls.forEach(abstractControl => {
    if (abstractControl instanceof FormControl) {
      (abstractControl as FormControl).markAsDirty({onlySelf: true});
    } else if (abstractControl instanceof FormGroup) {
      markAllControlsAsDirty(Object.values((abstractControl as FormGroup).controls));
    } else if (abstractControl instanceof FormArray) {
      markAllControlsAsDirty((abstractControl as FormArray).controls);
    }
  });
}
