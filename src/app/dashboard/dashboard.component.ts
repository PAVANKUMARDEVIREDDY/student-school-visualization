import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { chain } from 'lodash';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  studentGradeData: any[];
  view: any[] = [700, 400];

  // options
  gradient: boolean = true;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';

  colorScheme = {
    domain: ['#5AA454', '#C7B42C', '#A10A28', '#AAAAAA'],
  };

  constructor(private service: DataService, private router: Router) {
    this.normalize(this.service.data);
  }

  ngOnInit(): void {}

  normalize(data) {
    for (let student of data) {
      let totalSubj = 0;
      let totalMarks = 0;
      for (let subject in student.marks) {
        totalSubj += 1;
        totalMarks += student.marks[subject];
      }
      const percent = totalMarks / totalSubj;
      student.grade = this.fetchGrade(percent);
    }
    // console.log(single);
    this.studentGradeData = chain(data)
      // Group the elements of Array based on `color` property
      .groupBy('grade')
      // `key` is group's name (color), `value` is the array of objects
      .map((value, key) => ({ name: key, data: value, value: value.length }))
      .value();
  }

  fetchGrade(percent) {
    if (percent > 80) {
      return 'Grade 1';
    } else if (percent > 60) {
      return 'Grade 2';
    } else {
      return 'Grade 3';
    }
  }

  onSelect(data): void {
    this.service.setSelectedStudentGroup(this.studentGradeData.filter(item => item.name === data.name)[0].data)
    this.router.navigate(['./details']);
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
