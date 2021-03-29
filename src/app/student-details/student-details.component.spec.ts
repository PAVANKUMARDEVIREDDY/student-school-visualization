import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MDBBootstrapModule, MDBModalService } from 'angular-bootstrap-md';

import { StudentDetailsComponent } from './student-details.component';

describe('StudentDetailsComponent', () => {
  let component: StudentDetailsComponent;
  let fixture: ComponentFixture<StudentDetailsComponent>;
  let mdbModalServiceStub: any;

  mdbModalServiceStub = jasmine.createSpyObj('MDBModalService', ['show']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MDBBootstrapModule.forRoot(),
      ],
      declarations: [StudentDetailsComponent],
      providers: [
        { provide: MDBModalService, useValue: mdbModalServiceStub }, // Specify stub service
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
