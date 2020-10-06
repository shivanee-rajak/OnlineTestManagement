package com.dxctraining.onlinetestmanagement.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.dxctraining.onlinetestmanagement.entities.Admin;

public interface IAssignExamToUserDao extends JpaRepository<Admin,Integer> {

	
}
