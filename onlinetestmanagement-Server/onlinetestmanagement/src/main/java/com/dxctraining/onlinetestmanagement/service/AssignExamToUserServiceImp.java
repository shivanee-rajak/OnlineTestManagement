package com.dxctraining.onlinetestmanagement.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;
import java.util.Iterator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.dxctraining.onlinetestmanagement.dao.IAssignExamToUserDao;
import com.dxctraining.onlinetestmanagement.dao.IExamDao;
import com.dxctraining.onlinetestmanagement.dao.IUserDao;
import com.dxctraining.onlinetestmanagement.entities.AssignExamToUser;
import com.dxctraining.onlinetestmanagement.entities.Exam;
import com.dxctraining.onlinetestmanagement.entities.User;


@Service
@Transactional
public class AssignExamToUserServiceImp implements  IAssignExamToUserService{
 
	LocalDate datee;
	
	@Autowired
	private IAssignExamToUserDao assignExamToUserDaoI;
	
	@Autowired
	private IExamDao examDaoI;
	
	@Autowired
	private IUserDao userDaoI;
	
	

	@Override
	public boolean addUser(User user) {
		userDaoI.save(user);
		return true;
	}

	@Override
	public boolean editUser(User user) {
		userDaoI.saveAndFlush(user);
		return true;
	}

	@Override
	public User getUserById(int userId) {
		Optional<User> user = userDaoI.findById(userId);
		if(user.isPresent())
		{
			User userobj = user.get();
			return userobj;
		}
		return null;
	}

	@Override
	public List<User> getAllUsers() {
		List<User> user =userDaoI.findAll();
		return user;
	}

	@Override
	public boolean addExam(Exam exam) {
		examDaoI.save(exam);
		return true;
	}

	@Override
	public boolean editExam(Exam exam) {
		examDaoI.saveAndFlush(exam);
		return true;
	}

	@Override
	public List<Exam> viewExams() {
		List<Exam> obj = examDaoI.findAll();
		return obj;
	}

	@Override
	public Optional<Exam> getExamById(int examId) {
		Optional<Exam> obj=examDaoI.findById(examId);
		return obj;
	}
	

	
	@Override
	public AssignExamToUser assignExamToUser(int userId, int examId) {
		
		Optional<Exam> exam=examDaoI.findById(examId);
		Optional<User> user = userDaoI.findById(userId);
		
		if(exam.isPresent() && user.isPresent()) {
			
			Exam examObj = new Exam();
			examObj.setExamId(examId);
			
			User userObj = new User();
			userObj.setUserId(userId);
			
			AssignExamToUser obj = new AssignExamToUser();
			obj.setDateOfExam((LocalDate.now()));
			obj.setStatus(true);
			obj.setExam(examObj);
			obj.setUser(userObj);
			return assignExamToUserDaoI.save(obj);
		}
		else
		{
			return null;
		}
	}

	
	@Override
	public String editAssignExamToUser(AssignExamToUser assign,int examId) {
		Optional<Exam>examObj = examDaoI.findById(examId);
		Optional<AssignExamToUser> status = assignExamToUserDaoI.findById(assign.getAssignedId());
		if(status != null && examObj!= null) {			
			Exam obj = assign.getExam();
			obj.setExamId(examId);
			obj.setExamName(assign.getExam().getExamName());
			obj.setMinutes(assign.getExam().getMinutes());
			
			assign.setExam(obj);
			assignExamToUserDaoI.saveAndFlush(assign);
			return "Successfully Edited";
		}
		else
		return "Unsuccessfully Edited"; 
	}
	
	
	@Override
	public Optional<AssignExamToUser> viewAssignExamById(int assignedId) {
		Optional<AssignExamToUser> assignExamToUserObj = assignExamToUserDaoI.findById(assignedId);
		return assignExamToUserObj;
	}
	
	
	

	
}



	
	
	