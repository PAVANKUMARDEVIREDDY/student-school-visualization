import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import {
  MDBModalRef,
  MDBModalService,
  MdbTableDirective,
} from 'angular-bootstrap-md';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit, OnDestroy {
  data: any;

  @ViewChild(MdbTableDirective, { static: true }) mdbTable: MdbTableDirective;
  @ViewChild('row', { static: true }) row: ElementRef;
  headElements = ['Student Name', 'Age', 'E-mail', 'English', 'Maths', 'Science', 'Social Studies'];

  modalRef: MDBModalRef;

  constructor(
    private service: DataService,
    private modalService: MDBModalService
  ) {}

  ngOnInit() {
    this.data = this.service.getSelectedStudentGroup();
    this.mdbTable.setDataSource(this.data);
    this.data = this.mdbTable.getDataSource();
  }

  editRow(el: any) {
    const elementIndex = this.data.findIndex((elem: any) => el === elem);
    const modalOptions = {
      data: {
        editableRow: el,
      },
    };
    this.modalRef = this.modalService.show(ModalEditComponent, modalOptions);
    this.modalRef.content.saveButtonClicked.subscribe((newElement: any) => {
      this.data[elementIndex] = newElement;
      this.service.updateData(newElement);
    });
    this.mdbTable.setDataSource(this.data);
  }

  ngOnDestroy() {
    this.service.setSelectedStudentGroup();
  }
}
