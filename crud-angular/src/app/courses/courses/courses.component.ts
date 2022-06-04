import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  //sem parâmetro: public
  courses: Course[] = [
    {_id: "1", name: 'Angular', category: 'front-end'}
  ];

  //array de string com o nome das propriedades no /course
  displayedColumns = ['name', 'category'];

  constructor() {
    //this.courses = []; //inicializando variável
   }

  ngOnInit(): void {
  }

}
