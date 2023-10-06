import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserData } from 'src/app/Entity/user';
import { DataServiceService } from 'src/app/service/data-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit 
{
  user: UserData = new UserData(0, '', '', '', '', ''); // Initialize an empty UserData object
  userId: number; // Store the user ID from the route
  phoneExists: boolean=false;
  emailExists: boolean=false;

  constructor(
    private dataService: DataServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit() {
    // Get the user ID from the route parameter
    this.route.params.subscribe(params => {
      this.userId = +params['userid']; // Convert the parameter to a number
      if (this.userId) {
        // Load the user data for editing
        this.loadUserDataToEdit(this.userId);
      }
    });
  }

  loadUserDataToEdit(userId: number) {
    // Fetch the user data to edit based on the user ID
    this.dataService.findUserById(userId).subscribe((user: UserData) => {
      if (user) {
        this.user = user;
      } else {
        // Handle the case where the user with the specified ID was not found
        // You can redirect to an error page or handle it as needed
        // For now, let's navigate back to the user list
        this.router.navigate(['/user-list']);
      }
    });
  }

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
          } else {
            // Check if the email already exists
            this.http.get(`http://localhost:8080/findUserByEmail/${this.user.useremail}`).subscribe(
              (emailResponse: any) => {
                console.log('Email check response:', emailResponse); // Log the email check response
                if (emailResponse) {
                  this.emailExists = true;
                  console.error('Email is already exist. Please use a different one.'); // Log message
                  alert('Email is already exist. Please use a different one.'); // Alert message
                } else {
                  // If neither email nor phone number exists, submit the form
                  this.dataService.addUser(this.user).subscribe((userResponse: UserData) => {
                    // Handle the response (e.g., show a success message)
                    console.log('User added successfully:', userResponse); // Log message
                    alert('User added successfully.'); // Alert message
                    userForm.resetForm(); // Clear the form
                  });
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
