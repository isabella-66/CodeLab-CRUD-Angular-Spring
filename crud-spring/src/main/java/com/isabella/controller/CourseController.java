package com.isabella.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.isabella.model.Course;
import com.isabella.repository.CourseRepository;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor //construtor automático - boa prática
public class CourseController {

    private final CourseRepository courseRepository; //instância inauterável, apenas injeção - boa prática

    @GetMapping
    public List<Course> list() {
        return courseRepository.findAll();
    }

    @PostMapping
    /* @ResponseStatus(code = HttpStatus.CREATED) */ //caso não realize alterações depois, como no header
    public ResponseEntity<Course> create(@RequestBody Course course) {
        /* System.out.println(course.getName()); 

        * usa com @ResponseStatus no início
        * return courseRepository.save(course); //spring salva entidade no BD, obtém a chave primária, seta no objeto e retorna o objeto com os três campos preenchidos */

        return ResponseEntity.status(HttpStatus.CREATED)
               .body(courseRepository.save(course));
    }
}
