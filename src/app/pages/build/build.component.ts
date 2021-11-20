import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-build',
  templateUrl: './build.component.html',
  styleUrls: ['./build.component.scss']
})
export class BuildComponent implements OnInit {
  buildingFormGroup: FormGroup = this.fb.group({
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    area: new FormControl(),
    totalRooms: new FormControl(),
    status: new FormControl(),
    isFree: new FormControl(),
  });
  ownerFormGroup: FormGroup = this.fb.group({
    cin: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl('', [
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    phoneNumber: new FormControl(),
    dateOfBirth: new FormControl(),
  });
  minDate = new Date('1/1/1920');
  maxDate = new Date();
  addressFormGroup: FormGroup = this.fb.group({
    streetName: new FormControl(),
    city: new FormControl(),
    postalCode: new FormControl(),
    province: new FormControl(),
    houseNumber: new FormControl(),
    countryCode: new FormControl(),
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
