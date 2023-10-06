import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserData } from 'src/app/Entity/user';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-user-delete',
  templateUrl: './user-delete.component.html',
  styleUrls: ['./user-delete.component.css']
})
export class UserDeleteComponent implements OnInit {
  userId: number;
  user: UserData;
  errorMessage: string;

  constructor(
    private dataService: DataServiceService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userId = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    // Load the user data to display
    this.dataService.findUserById(this.userId).subscribe(
      (user: UserData) => {
        this.user = user;
      },
      (error) => {
        this.errorMessage = 'User not found';
      }
    );
  }

  onDelete() {
    // Check if the user exists before showing the confirmation dialog
    this.dataService.findUserById(this.userId).subscribe(
      (user) => {
        // User exists, show the confirmation dialog
        if (confirm('Are you sure you want to delete this user?')) {
          // Delete the user
          this.dataService.deleteById(this.userId).subscribe(
            () => {
              // Handle the success response or show a success message if needed
              alert('User deleted successfully.');
              // Redirect to the user-list page
              this.router.navigate(['/user-list']);
            },
            (error) => {
              // Handle errors here
              this.errorMessage = 'An error occurred while deleting the user'; // Set a generic error message
              
            }
          );
        }
      },
      (error) => {
        // Handle the case where the user does not exist
      
        this.errorMessage = 'User not found';
        alert(this.errorMessage);
      }
    );
  }
  
  
}
