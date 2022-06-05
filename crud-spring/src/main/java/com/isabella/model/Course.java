//classe de cursos, para representar o curso
package com.isabella.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Data    //gera automaticamente getters e setters, entre outros
@Entity //especifica que é entidade que vai fazer mapeamento com o banco de dados
/* @Table(name = "cursos") */
public class Course {
    
    @Id //chave primária
    @GeneratedValue(strategy = GenerationType.AUTO) //valor adicionado automaticamente pelo banco de dados
    private Long id;

    @Column(length = 200, nullable = false) //nº de caracteres máximo, não aceita valores nulos 
    private String name; //se não coloca nome na coluna, automaticamente é usado o que deu a sua classe
    
    @Column(length = 10, nullable = false)
    private String category;
}
