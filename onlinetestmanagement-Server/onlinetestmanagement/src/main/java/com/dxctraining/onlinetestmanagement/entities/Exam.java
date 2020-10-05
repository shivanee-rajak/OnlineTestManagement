package com.dxctraining.onlinetestmanagement.entities;

import javax.persistence.Entity;

import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name = "exams")
@Entity
public class Exam {
	
	@Id
    @GeneratedValue
	private int examId;
	private String examName;
	private int minutes;
	
	
    public Exam(){

    }
	
	public Exam(int examId, String examName, int minutes) {
		
		this.examId = examId;
		this.examName = examName;
		this.minutes = minutes;
	}
	
	
	public int getExamId() {
		return examId;
	}
	public void setExamId(int examId) {
		this.examId = examId;
	}
	public String getExamName() {
		return examName;
	}
	public void setExamName(String examName) {
		this.examName = examName;
	}
	public int getMinutes() {
		return minutes;
	}
	public void setMinutes(int minutes) {
		this.minutes = minutes;
	}

	
	
	

}
