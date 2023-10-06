package com.register.controlar;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.register.dao.Register;
import com.register.service.Registerservice;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class RegisterControlar {
	

	@Autowired
	private Registerservice registerservice;
	
	@PostMapping("/addUser")
	public ResponseEntity<Register> addUser(@Valid @RequestBody Register register) {
		
		Register r= registerservice.addUser(register);
		
		return new  ResponseEntity<Register>(r,HttpStatus.CREATED);
	}
	
	@GetMapping("/getAllUser")
	public List<Register> getAllUser(){
		return registerservice.getAllUser();
		
	}
	
	@GetMapping("/findUserById/{userid}")
	public Register findUserById(@PathVariable("userid") Integer userid) {
		return registerservice.findUserById(userid);
	}
	
	@GetMapping("/findUserByEmail/{useremail}")
	public Register findUserByEmail(@PathVariable("useremail") String useremail) {
		return registerservice.findUserByEmail(useremail);
	}
	
	@GetMapping("/findUserByPhno/{userphno}")
	public Register findUserByPhno(@PathVariable("userphno") String userphno) {
		return registerservice.findUserByPhno(userphno);
	}
	
	@PutMapping("/updateById/{userid}")
	public Register updateById(@PathVariable("userid") Integer userid, @RequestBody Register register) 
	{
		return registerservice.updateById(userid, register);
	}
	
	@DeleteMapping("/deleteById/{userid}")
	public List<Register>  deleteById(@PathVariable("userid") Integer userid){
		return registerservice.deleteById(userid);
	}
}










