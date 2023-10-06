import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';
import { UserData } from 'src/app/Entity/user';

@Component({
  selector: 'app-user-list-pagination',
  templateUrl: './user-list-pagination.component.html',
  styleUrls: ['./user-list-pagination.component.css']
})
export class UserListPaginationComponent implements OnInit {
  users: UserData[]; // Define an array to store user data
  currentPage: number = 1; // Current page
  itemsPerPage: number = 5; // Number of items to display per page

  constructor(
    private dataServiceService: DataServiceService,
    private router: Router
  ) {}

  // Define displayedUsers property
  displayedUsers: UserData[];

  ngOnInit() {
    // Fetch user data from the service when the component is initialized
    this.dataServiceService.getAllUser().subscribe((data: UserData[]) => {
      this.users = data;
      this.updateDisplayedUsers();
    });
  }

  // Function to delete a user by ID
  deleteUser(userId: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.dataServiceService.deleteById(userId).subscribe(() => {
        // After deletion, refresh the user list
        this.dataServiceService.getAllUser().subscribe((data: UserData[]) => {
          this.users = data;
          this.updateDisplayedUsers();
        });
      });
    }
  }

  // Function to navigate to the edit page with the user ID as a route parameter
  editUser(userId: number) {
    this.router.navigate(['/edit', userId]);
  }

  // Function to change the current page
  setPage(pageNumber: number) {
    this.currentPage = pageNumber;
    this.updateDisplayedUsers();
  }

  // Calculate the start and end indices of the displayed data
  get startIndex() {
    return (this.currentPage - 1) * this.itemsPerPage;
  }

  get endIndex() {
    return Math.min(this.startIndex + this.itemsPerPage, this.users.length);
  }

  // Update the displayedUsers array based on the current page
  updateDisplayedUsers() {
    this.displayedUsers = this.users.slice(this.startIndex, this.endIndex);
  }

  // Function to go to the previous page
  prevPage() {
    if (this.currentPage > 1) {
      this.setPage(this.currentPage - 1);
    }
  }

  // Function to go to the next page
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.setPage(this.currentPage + 1);
    }
  }

  // Calculate the total number of pages
  get totalPages() {
    return Math.ceil(this.users.length / this.itemsPerPage);
  }

  // Generate an array of page numbers for the pagination controls
  getPages() {
    const pages: number[] = [];
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i);
    }
    return pages;
  }

  // Function to handle the change in items per page
  changeItemsPerPage() {
    this.currentPage = 1; // Reset to the first page
    this.updateDisplayedUsers();
  }
}
