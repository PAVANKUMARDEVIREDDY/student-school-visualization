import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MDBModalRef } from 'angular-bootstrap-md';

import { ModalEditComponent } from './modal-edit.component';

describe('ModalEditComponent', () => {
  let component: ModalEditComponent;
  let fixture: ComponentFixture<ModalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditComponent ],
      providers: [
        {provide: MDBModalRef, useValue: {}},
    ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditComponent);
    component = fixture.componentInstance;
    component.editableRow = {
      id: 1,
      name: 'Alice',
      age: 16,
      email: 'alice@abc.com',
      marks: { English: 92, Maths: 90, Science: 85, 'Social Studies': 82 },
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
