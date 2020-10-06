package com.dxctraining.onlinetestmanagement.service;

import java.util.List;

import java.util.Optional;

import com.dxctraining.onlinetestmanagement.entities.Admin;
import com.dxctraining.onlinetestmanagement.entities.Exam;
import com.dxctraining.onlinetestmanagement.entities.User;

public interface IAssignExamToUserService {
	
	
	public boolean addUser(User user);
	public boolean editUser(User user);
	public User getUserById(int userId);
	public List<User> getAllUsers();
	
	
	 public boolean addExam(Exam exam);
	 public boolean editExam(Exam exam);
	 public List<Exam> viewExams();
	 public Optional<Exam> getExamById(int examId);
			
	
			
	 
	 public Admin assignExamToUser(int userId, int examId);
	 public String editAssignExamToUser(Admin editAssignExamToUser ,int examId);
	 public Optional<Admin> viewAssignExamById(int assignedId);
	
}
