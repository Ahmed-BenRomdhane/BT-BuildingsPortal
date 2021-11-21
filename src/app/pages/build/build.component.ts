import { BuildingsService } from './../../services/buildings.service';
import { OwnersService } from './../../services/owners.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Owner } from 'src/app/models/owner.model';
import { AddressService } from 'src/app/services/address.service';
import { Router } from '@angular/router';
import { Building } from 'src/app/models/building.model';
import { MatSnackBar, } from '@angular/material/snack-bar';
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
    area: new FormControl('10'),
    totalRooms: new FormControl('0'),
    status: new FormControl(),
    isFree: new FormControl(true),
  });
  ownerFormGroup: FormGroup = this.fb.group({
    Cin: new FormControl(),
    FirstName: new FormControl(),
    LastName: new FormControl(),
    Email: new FormControl('', [
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    PhoneNumber: new FormControl(),
    DateOfBirth: new FormControl(),
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
  cinFilled = false;
  areOwnerFieldsReadOnly = false;

  constructor(private addressService: AddressService, private buildingsService: BuildingsService, private fb: FormBuilder,
    private ownersService: OwnersService, private router: Router, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  checkOwnerExistsOrNot(): void {
    const cin = this.ownerFormGroup.get('Cin')?.value;
    if (cin) {
      this.cinFilled = true;
      this.ownersService.IsOwnerAlreadyExists(cin).subscribe((owner) => {
        if (owner) {
          this.areOwnerFieldsReadOnly = true;
          this.patchOwnerFormGroup(owner);
        } else {
          this.areOwnerFieldsReadOnly = false;
          this.ownerFormGroup.patchValue({ firstName: '', lastName: '', email: '', phoneNumber: '', dateOfBirth: null });
        }
      });
    } else {
      this.cinFilled = false;
    }
  }

  patchOwnerFormGroup(owner: Owner): void {
    this.ownerFormGroup.patchValue(owner);
  }

  publishBuilding(): void {
    if (this.addressFormGroup.valid) {
      this.addressService.CreateAddress(this.addressFormGroup.value).subscribe(() => {
        if (this.ownerFormGroup.valid && !this.areOwnerFieldsReadOnly) {
          console.log(this.ownerFormGroup.value);

          this.ownersService.CreateOwner(this.ownerFormGroup.value).subscribe(() => {
          }, (error) => {
            this._snackBar.open('There was error when creating the owner', 'X', {
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          });
        }
        if (this.buildingFormGroup.valid) {
          const building: Building = this.buildingFormGroup.value;
          building.owner = this.ownerFormGroup.value;
          building.address = this.addressFormGroup.value;
          this.buildingsService.CreateBuilding(building).subscribe((building) => {
            this._snackBar.open('Your building is published. Great Success.', 'X', {
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
            console.log(building);
            this.router.navigate(['/building/' + building.id]);
          }, (error) => {
            this._snackBar.open('There was error when creating the building', 'X', {
              horizontalPosition: 'center',
              verticalPosition: 'bottom',
            });
          })
        }
      }, (error) => {
        this._snackBar.open('There was error when creating the address', 'X', {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
        });
      });
    }
  }
}
