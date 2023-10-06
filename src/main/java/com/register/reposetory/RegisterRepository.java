package com.register.reposetory;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.register.dao.Register;

@Repository
public interface RegisterRepository extends JpaRepository<Register, Integer>{

	
	@Query(value = "Select * from Register where useremail=?", nativeQuery = true)
	public Register findByEmail(String useremail);

	@Query(value = "Select * from Register where userphno=?", nativeQuery = true)
	public Register findByPhno(String userphno);

}
