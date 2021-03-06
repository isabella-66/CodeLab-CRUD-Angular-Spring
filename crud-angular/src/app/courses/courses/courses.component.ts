import { ErrorDialogComponent } from './../../shared/components/error-dialog/error-dialog.component';
import { CoursesService } from './../services/courses.service';
import { Component, OnInit } from '@angular/core';

import { Course } from '../model/course';
import { catchError, Observable, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  //sem parâmetro: public; $ - padrão Observable
  courses$: Observable<Course[]>;

  //array de string com o nome das propriedades no /course
  displayedColumns = ['name', 'category', 'actions'];

  /* coursesService: CoursesService; */

  //injeção só quando tem @Injectable
  constructor(
    private coursesService: CoursesService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    /* this.courses = []; //inicializando variável
    /* this.coursesService = new CoursesService(); //instanciação de classe */

    this.courses$ = this.coursesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar cursos');
        return of([])
      })
    );
   }

   onError(errorMessage: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMessage
    });
  }

  ngOnInit(): void {

  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route}); //rota new relativa a rota que já está
  }

}

