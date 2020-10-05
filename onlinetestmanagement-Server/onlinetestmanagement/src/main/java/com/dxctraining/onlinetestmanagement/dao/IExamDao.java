package com.dxctraining.onlinetestmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dxctraining.onlinetestmanagement.entities.Exam;

@Repository
public interface IExamDao extends JpaRepository<Exam,Integer>{

}
