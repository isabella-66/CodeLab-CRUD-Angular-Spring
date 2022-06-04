import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Course } from '../model/course';

@Injectable({
  providedIn: 'root' //instancia fornecida na raiz do projeto
})
export class CoursesService {

  //chamada assíncrona pro servidor - conexão com API
  constructor(private httpClient: HttpClient) { }

  list(): Course[] {
    return [
      {_id: "1", name: 'Angular', category: 'front-end'}
    ];
  }
}
