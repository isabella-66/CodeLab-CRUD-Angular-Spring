package com.isabella.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
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

}
