package com.dxctraining.onlinetestmanagement.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dxctraining.onlinetestmanagement.entities.AssignExamToUser;
import com.dxctraining.onlinetestmanagement.entities.Exam;
import com.dxctraining.onlinetestmanagement.entities.User;
import com.dxctraining.onlinetestmanagement.exceptions.AssignExamNotFoundException;
import com.dxctraining.onlinetestmanagement.exceptions.ExamNotFoundException;
import com.dxctraining.onlinetestmanagement.exceptions.UserNotFoundExceptions;
import com.dxctraining.onlinetestmanagement.service.IAssignExamToUserService;

@RestController
@RequestMapping("/onlineTestManagement")
@CrossOrigin("http://localhost:4200")
public class Controller {
	
	
	@Autowired
	private IAssignExamToUserService service;
	
	
	
	@PostMapping("/user/addUser")
	public ResponseEntity<Boolean> addUser(@RequestBody User user) throws UserNotFoundExceptions{
		boolean status = service.addUser(user);
		if(status == true)
		{
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		}
		else
		  throw new UserNotFoundExceptions("Unable to Create the User ");
		
	}
	
	
	
	@GetMapping("/user/getUser/{userId}")
	public ResponseEntity<User>getUserById(@PathVariable("userId") int userId) throws UserNotFoundExceptions{
		User status = service.getUserById(userId);
		if(status!=null)
		{
			return new ResponseEntity<User>(status,HttpStatus.OK);
		}
		else
		{
			throw new UserNotFoundExceptions(userId+"Unable to find the User! Please try again");
		}
	}
	
	
	
	@PostMapping("/exam/addExam")
	public ResponseEntity<Boolean> addExam(@RequestBody Exam exam) throws ExamNotFoundException{
		boolean status = service.addExam(exam);
		if(status ==true)
		{
			return new ResponseEntity<Boolean>(true,HttpStatus.OK);
		}
		else
		{
			throw new ExamNotFoundException("Unable to create the Exam! Check it once again");
		}
	}
	
	
	
	@GetMapping("/exam/getExam/{examId}")
	public ResponseEntity<Exam>getExamById(@PathVariable("examId") int examId) throws ExamNotFoundException{
		Optional<Exam>status = service.getExamById(examId);
		if(status.isPresent()==true)
		{
			Exam exam = status.get();
			return new ResponseEntity<Exam>(exam,HttpStatus.OK);
		}
		else
		{
			throw new ExamNotFoundException(examId+" was not Found! Please try Again");
		}
	}
	
	
	
	@PostMapping("/admin/assignExam/{userId}/{examId}")
	public ResponseEntity<String> assignExamToUser(@PathVariable("examId") int examId, @PathVariable("userId") int userId) throws AssignExamNotFoundException{
		String status ="Success";
		AssignExamToUser obj = service.assignExamToUser(userId,examId);
		if(obj != null) {
			return new ResponseEntity<String>(status,HttpStatus.OK);
		}
		else {
			throw new AssignExamNotFoundException("Something Gone Wrong! Please check the "+userId+" and "+examId +" is exist or not before Assign the exam" );
		}
		
	}
	
	
	
	@PutMapping("/admin/editAssignedExam/{examId}")
	public ResponseEntity<String> editAssignedExam(@RequestBody AssignExamToUser assign, @PathVariable("examId") int examId) throws AssignExamNotFoundException{
		String str = "Successfully Edited";
		String status = service.editAssignExamToUser(assign, examId);
		if(status.contentEquals(str)) {
			return new ResponseEntity<String>(str,HttpStatus.OK);
		}
		else
			throw new AssignExamNotFoundException("Something Gone Wrong! Please check the examId "+examId );
	}
	
	
	
	@GetMapping("/admin/viewAssignedExamById/{assignedId}")
	public ResponseEntity<AssignExamToUser> viewAssignedExamById(@PathVariable("assignedId") int assignedId) throws AssignExamNotFoundException{
		Optional<AssignExamToUser>status =service.viewAssignExamById(assignedId);
		if(status.isPresent())
		{
			AssignExamToUser obj = status.get();
			return new ResponseEntity<AssignExamToUser>(obj,HttpStatus.OK);
		}
		else
		throw new AssignExamNotFoundException(assignedId+" is not found");
	}
		
	
	
	
	
	

}
