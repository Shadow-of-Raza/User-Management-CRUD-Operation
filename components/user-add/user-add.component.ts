import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserData } from 'src/app/Entity/user';
import { DataServiceService } from 'src/app/service/data-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent {
  user: UserData = new UserData(0, '', '', '', '', '');
  emailExists:boolean=false;
  phoneExists:boolean=false;

  constructor(private dataService: DataServiceService, private http: HttpClient) {}

  onSubmit(userForm: NgForm) {
    if (userForm.valid) {
      // Check if the phone number already exists
      
      this.http.get(`http://localhost:8080/findUserByPhno/${this.user.userphno}`).subscribe(
        (phoneResponse: any) => {
          console.log('Phone check response:', phoneResponse); // Log the phone check response
          
          if (phoneResponse) {
            this.phoneExists = true;
            console.error('Phone Number is already exist. Please use a different one.'); // Log message
            alert('Phone Number is already exist. Please use a different one.'); // Alert message
          } 
          
          else {
            // Check if the email already exists
            this.http.get(`http://localhost:8080/findUserByEmail/${this.user.useremail}`).subscribe(
              (emailResponse: any) => {
                console.log('Email check response:', emailResponse); // Log the email check response
                
                if (emailResponse) {
                  this.emailExists = true;
                  console.error('Email is already exist. Please use a different one.'); // Log message
                  alert('Email is already exist. Please use a different one.'); // Alert message
                } 
                
                else {
                  // If neither email nor phone number exists, submit the form

                  this.dataService.addUser(this.user).subscribe(
                    (
                      userResponse: UserData
                      ) => {
                    // Handle the response (e.g., show a success message)
                    console.log('User added successfully:', userResponse); // Log message
                    alert('User added successfully.'); // Alert message

                    userForm.resetForm(); // Clear the form
                

                  }
                  );
                }
              },
              (error) => {
                console.error('Error checking email existence:', error);
                alert("Error checking email existence. Please try again."); // Alert message for email check error
              }
            );
          }
        }, 
      );
    }
  }
}
