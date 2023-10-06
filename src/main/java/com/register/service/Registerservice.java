package com.register.service;

import java.util.List;

import com.register.dao.Register;

public interface Registerservice {

	public Register addUser(Register register);

	public List<Register> getAllUser();

	public Register findUserById(Integer userid);

	public Register updateById(Integer userid, Register register);

	public List<Register> deleteById(Integer userid);

	public Register findUserByEmail(String useremail);

	public Register findUserByPhno(String userphno);

}
