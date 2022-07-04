package com.prayag.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.prayag.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Long> {

}
