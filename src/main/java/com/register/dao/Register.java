package com.register.dao;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Email;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Entity
public class Register 
{	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userid;
	
	@Column(length = 50,nullable = false)
	private String username;
	
	@Column(length = 40, nullable = false, unique = true)
	@NotBlank(message = "Email should not be null and it should be unique. Enter you correct email...")
	@Email(message = "Invalid Email", regexp="^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\\.[a-zA-Z.]{2,5}")
	private String useremail;
	
	@Column(length = 10, nullable = false, unique = true)
	@Pattern(message = "Invalid Phone Number", regexp = "^[6-9]\\d{9}$")
	private String userphno;
	
	
	@Column(length = 50, nullable = false)
	private String useraddress;
	
	
	@Column(length = 40, nullable = false)
	@Pattern(
		    regexp = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9!@#$%^&*()_+\\-=\\[\\]{};':\"\\\\|,.<>\\/?]).{7,}$",
		    message = "Password must be greater than 6 characters and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
		)
	private String userpassword;
	
	
	
	public Register() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Register(String username, String useremail, String userphno, String useraddress, String userpassword) {
		super();
		this.username = username;
		this.useremail = useremail;
		this.userphno = userphno;
		this.useraddress = useraddress;
		this.userpassword = userpassword;
	}
	public Integer getUserid() {
		return userid;
	}
	public void setUserid(Integer userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getUseremail() {
		return useremail;
	}
	public void setUseremail(String useremail) {
		this.useremail = useremail;
	}
	public String getUserphno() {
		return userphno;
	}
	public void setUserphno(String userphno) {
		this.userphno = userphno;
	}
	public String getUseraddress() {
		return useraddress;
	}
	public void setUseraddress(String useraddress) {
		this.useraddress = useraddress;
	}
	public String getUserpassword() {
		return userpassword;
	}
	public void setUserpassword(String userpassword) {
		this.userpassword = userpassword;
	}
	@Override
	public String toString() {
		return "Register [userid=" + userid + ", username=" + username + ", useremail=" + useremail + ", userphno="
				+ userphno + ", useraddress=" + useraddress + ", userpassword=" + userpassword + "]";
	}
}
