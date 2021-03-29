import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MDBModalRef } from 'angular-bootstrap-md';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit {
  public editableRow: {
    id: number,
    name: string,
    age: number,
    email: string,
    marks: {
      'English': number;
      'Maths': number;
      'Science': number;
      'Social Studies': number;
    }
  };
  public saveButtonClicked: Subject<any> = new Subject<any>();

  public form: FormGroup = new FormGroup({
    id: new FormControl({ value: '', disabled: true }),
    name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z \-\']+')]),
    age: new FormControl('', [Validators.required, Validators.pattern("(0?[5-9]|[1-2][0-9])")]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
  });

  constructor(public modalRef: MDBModalRef) {}

  ngOnInit() {
    this.form.controls['id'].patchValue(this.editableRow.id);
    this.form.controls['name'].patchValue(this.editableRow.name);
    this.form.controls['age'].patchValue(this.editableRow.age);
    this.form.controls['email'].patchValue(this.editableRow.email);
  }

  editRow() {
    this.editableRow = Object.assign(this.editableRow, this.form.getRawValue()); this.form.getRawValue();
    this.saveButtonClicked.next(this.editableRow);
    this.modalRef.hide();
  }

  get name() {
    return this.form.get('name');
  }

  get age() {
    return this.form.get('age');
  }

  get email() {
    return this.form.get('email');
  }
}
