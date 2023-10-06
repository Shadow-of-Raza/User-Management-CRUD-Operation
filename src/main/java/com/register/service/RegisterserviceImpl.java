package com.register.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.register.dao.Register;
import com.register.reposetory.RegisterRepository;

@Service
public class RegisterserviceImpl implements Registerservice{

	@Autowired
	private RegisterRepository registerRepository;
	
	@Override
	public Register addUser(Register register) {
		return registerRepository.save(register);
	}

	@Override
	public List<Register> getAllUser() {
		return registerRepository.findAll();
	}

	@Override
	public Register findUserById(Integer userid) {
		return registerRepository.findById(userid).get();
	}
	
	@Override
	public Register findUserByEmail(String useremail) {
		return registerRepository.findByEmail(useremail);
	}
	
	@Override
	public Register findUserByPhno(String userphno) {
		return registerRepository.findByPhno(userphno);
	}

	@Override
	public Register updateById(Integer userid, Register register) {
		Register reg=registerRepository.findById(userid).get();
		reg.setUsername(register.getUsername());
		reg.setUseremail(register.getUseremail());
		reg.setUseraddress(register.getUseraddress());
		reg.setUserphno(register.getUserphno());
		reg.setUserpassword(register.getUserpassword());
		registerRepository.save(reg);
		return reg;
	}

	@Override
	public List<Register> deleteById(Integer userid) {
		registerRepository.deleteById(userid);
		return registerRepository.findAll();
	}

	

	

}
