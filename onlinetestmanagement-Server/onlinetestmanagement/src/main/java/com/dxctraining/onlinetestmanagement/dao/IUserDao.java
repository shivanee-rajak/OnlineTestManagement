package com.dxctraining.onlinetestmanagement.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dxctraining.onlinetestmanagement.entities.User;

@Repository
public interface IUserDao extends JpaRepository<User,Integer>{

}
