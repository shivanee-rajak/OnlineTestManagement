package com.dxctraining.onlinetestmanagement.entities;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Table(name = "assignexam")
@Entity
public class AssignExamToUser {
	
	@Id
	@GeneratedValue
    private int assignedId;   
	private int marks;
	private boolean status;
	private LocalDate dateOfExam;
	
	@ManyToOne
	private User user ;
	
	@ManyToOne
	private Exam exam ;
	
	 
     public AssignExamToUser(){

	    }
		
	public AssignExamToUser(int assignedId, int marks, boolean status, LocalDate dateOfExam, User user, Exam exam) {
		super();
		this.assignedId = assignedId;
		this.marks = marks;
		this.status = status;
		this.dateOfExam = dateOfExam;
		this.user = user;
		this.exam = exam;
	}

	public int getAssignedId() {
		return assignedId;
	}

	public void setAssignedId(int assignedId) {
		this.assignedId = assignedId;
	}

	public int getMarks() {
		return marks;
	}

	public void setMarks(int marks) {
		this.marks = marks;
	}

	public boolean isStatus() {
		return status;
	}

	public void setStatus(boolean status) {
		this.status = status;
	}

	public LocalDate getDateOfExam() {
		return dateOfExam;
	}

	public void setDateOfExam(LocalDate dateOfExam) {
		this.dateOfExam = dateOfExam;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public Exam getExam() {
		return exam;
	}

	public void setExam(Exam exam) {
		this.exam = exam;
	}

	
	
	
	
	
}
