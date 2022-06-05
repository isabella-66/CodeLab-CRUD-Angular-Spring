package com.isabella.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.isabella.model.Course;

@Repository
//<entidade, tipo chave primária>
public interface CourseRepository extends JpaRepository<Course, Long> { //ao declarar como interface, consegue estender interfaces do próprio jpa, no Spring Data, facilitando acesso ao BD

}