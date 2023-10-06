import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserData } from 'src/app/Entity/user';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: UserData[]; // Define a users array to store user data

  constructor(
    private dataServiceService: DataServiceService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch user data from the service when the component is initialized
    this.dataServiceService.getAllUser().subscribe((data: UserData[]) => {
      this.users = data;
    });
  }

  // Function to delete a user by ID
  deleteUser(userId: number) {
    
    if (confirm('Are you sure you want to delete this user?')) {
      this.dataServiceService.deleteById(userId).subscribe(() => {
        // After deletion, refresh the user list
        this.dataServiceService.getAllUser().subscribe((data: UserData[]) => {
          this.users = data;
        });
      });
    }
  }

  // Function to navigate to the edit page with the user ID as a route parameter
  editUser(userId: number) {
    this.router.navigate(['/edit', userId]);
  }
  
}
