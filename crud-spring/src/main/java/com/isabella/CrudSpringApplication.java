package com.isabella;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.isabella.model.Course;
import com.isabella.repository.CourseRepository;

@SpringBootApplication
public class CrudSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(CrudSpringApplication.class, args);
	}

	@Bean //Spring gerencia todo ciclo de vida
	CommandLineRunner initDataBase(CourseRepository courseRepository) { //assim que aplicação sobe, o conteúdo é executado
		return args -> {
			courseRepository.deleteAll(); //sempre que inicializa, limpa base de dados para ter novos
			
			Course c = new Course();
			c.setName("Angular com Spring");
			c.setCategory("front-end");
			
			courseRepository.save(c); //salva nova entidade, um curso novo
		};
	}

}
