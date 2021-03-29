import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  data: any = [
    {
      id: 1,
      name: 'Alice',
      age: 16,
      email: 'alice@abc.com',
      marks: { English: 92, Maths: 90, Science: 85, 'Social Studies': 82 },
    },
    {
      id: 2,
      name: 'David',
      age: 17,
      email: 'david@gc.com',
      marks: { English: 67, Maths: 50, Science: 85, 'Social Studies': 72 },
    },
    {
      id: 3,
      name: 'Maxham',
      age: 19,
      email: 'maxham@ca.com',
      marks: { English: 92, Maths: 58, Science: 55, 'Social Studies': 62 },
    },
    {
      id: 4,
      name: 'Chris',
      age: 16,
      email: 'chris@abc.com',
      marks: { English: 52, Maths: 90, Science: 75, 'Social Studies': 62 },
    },
    {
      id: 5,
      name: 'Tom',
      age: 17,
      email: 'tom@abc.com',
      marks: { English: 52, Maths: 50, Science: 45, 'Social Studies': 52 },
    },
    {
      id: 6,
      name: 'Harry',
      age: 16,
      email: 'harry@abc.com',
      marks: { English: 42, Maths: 50, Science: 45, 'Social Studies': 37 },
    },
    {
      id: 7,
      name: 'Carry',
      age: 15,
      email: 'carry@ah.com',
      marks: { English: 75, Maths: 90, Science: 85, 'Social Studies': 89 },
    },
    {
      id: 8,
      name: 'Sam',
      age: 19,
      email: 'sam@xyz.com',
      marks: { English: 43, Maths: 42, Science: 57, 'Social Studies': 52 },
    },
    {
      id: 9,
      name: 'Eric',
      age: 20,
      email: 'eric@xc.com',
      marks: { English: 72, Maths: 60, Science: 65, 'Social Studies': 52 },
    },
    {
      id: 10,
      name: 'Ram',
      age: 17,
      email: 'ram@pp.com',
      marks: { English: 52, Maths: 40, Science: 35, 'Social Studies': 22 },
    },
    {
      id: 11,
      name: 'John',
      age: 19,
      email: 'john@xy.com',
      marks: { English: 52, Maths: 90, Science: 35, 'Social Studies': 26 },
    },
    {
      id: 12,
      name: 'Brandon',
      age: 18,
      email: 'brandon@ac.com',
      marks: { English: 90, Maths: 87, Science: 80, 'Social Studies': 92 },
    },
  ];

  selectedStudentGroup: any[];

  constructor() {}

  getSelectedStudentGroup() {
    return this.selectedStudentGroup;
  }

  setSelectedStudentGroup(value: any = []) {
    this.selectedStudentGroup = value;
  }

  updateData(d: any) {
    const elementIndex = this.data.findIndex((elem: any) => d.id === elem.id);
    this.data[elementIndex] = d;
  }
}
