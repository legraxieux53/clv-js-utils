// import {AbstractControl, FormArray, FormControl, FormGroup} from "@angular/forms";
// import {jsType} from "../common/jstype";

// export function objectToReactiveForm(params: {obj: any, defaultArrayName?: string}): FormGroup {
//   if (!params.defaultArrayName) {
//     params.defaultArrayName = 'arrayName';
//   }

//   const formGroup: FormGroup = new FormGroup({});
//   if (jsType(params.obj) === 'array') {
//     formBuildingEngine({
//       key: params.defaultArrayName,
//       obj: params.obj,
//       control: formGroup
//     });
//   } else {
//     formBuildingEngine({
//       key: null,
//       obj: params.obj,
//       control: formGroup
//     });
//   }
//   return formGroup;
// }

// export function formBuildingEngine(params: {key: any, obj: any, control: AbstractControl}): void {
//   switch (jsType(params.obj)) {
// case 'array':
//   arrayFieldBuilderEngine({
//     key: params.key,
//     obj: params.obj,
//     control: params.control
//   });
//   break;

// case 'object':
//   objectFieldBuilderEngine({
//     key: params.key,
//     obj: params.obj,
//     control: params.control
//   });
//   break;

// default:
//   (params.control as FormGroup).setControl(params.key, new FormControl(params.obj));
// }
// }
// export function objectFieldBuilderEngine(params: {key: any, obj: any, control: AbstractControl}) {
//   if (params.key === null) {
//     Object.keys(params.obj).map(ke => {
//       formBuildingEngine({
//         key: ke,
//         obj: params.obj[ke],
//         control: params.control
//       });
//     });
//   } else {
//     const formGroup: FormGroup = new FormGroup({});
//     (params.control as FormGroup).setControl(params.key, formGroup);
//     Object.keys(params.obj).map(ke => {
//       formBuildingEngine({
//         key: ke,
//         obj: params.obj[ke],
//         control: formGroup
//       });
//     });
//   }
// }
// export function arrayFieldBuilderEngine(params: {key: any, obj: any, control: AbstractControl}) {
//   const array = new FormArray([]);
//   (params.control as FormGroup).setControl(params.key, array);
//   if (jsType(params.obj) === 'array') {
//     params.obj.map(k => {
//       const formGroup: FormGroup = new FormGroup({});
//       array.push(formGroup);
//       formBuildingEngine({
//         key: null,
//         obj: k,
//         control: formGroup
//       });
//     });
//   }
// }
