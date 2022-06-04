import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  //sem parâmetro: public
  courses: Course[] = [];

  //array de string com o nome das propriedades no /course
  displayedColumns = ['name', 'category'];

  /* coursesService: CoursesService; */

  //injeção só quando tem @Injectable
  constructor(private coursesService: CoursesService) {
    /* this.courses = []; //inicializando variável
    /* this.coursesService = new CoursesService(); //instanciação de classe */
   }

  ngOnInit(): void {
    //recebe coursesService e lista só quando inicializado
    this.courses = this.coursesService.list();
  }

}
