import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

}
