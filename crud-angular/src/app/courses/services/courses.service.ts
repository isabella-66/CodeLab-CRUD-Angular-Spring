import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, first, tap } from 'rxjs/operators';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root' //instancia fornecida na raiz do projeto
})
export class CoursesService {

  //caminho p/ chamar no servidor
  private readonly API = 'api/courses';

  //chamada assíncrona pro servidor - conexão com API
  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      first(), //interessada em obter apenas 1ª resposta que o servidor enviar, a lista json
      /* delay(5000), //3s */
      tap(courses => console.log(courses)) //recebe lista de cursos e faz algo com essa info (debuga)
    );
  }

  save(record: Course) {
    return this.httpClient.post<Course>(this.API, record).pipe(first());
  }
}
