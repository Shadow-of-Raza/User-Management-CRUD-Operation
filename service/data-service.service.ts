import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from '/Users/ansar/Day1/src/app/Entity/user';
 // Replace with the correct path to your UserData model

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  constructor(private http: HttpClient) {}

  // Fetch all users
  getAllUser(): Observable<UserData[]> {
    return this.http.get<UserData[]>('http://localhost:8080/getAllUser');
  }

  // Fetch a user by ID
  findUserById(userId: number): Observable<UserData> {
    return this.http.get<UserData>(`http://localhost:8080/findUserById/${userId}`);
  }

  // Fetch a user by Email
  findUserByEmail(useremail: string): Observable<UserData> {
    return this.http.get<UserData>(`http://localhost:8080/findUserByEmail/${useremail}`);
  }

   // Fetch a user by Phno
   findUserByPhno(userphno: string): Observable<UserData> {
    return this.http.get<UserData>(`http://localhost:8080/findUserByPhno/${userphno}`);
  }

  // Add a new user
  addUser(userData: UserData): Observable<UserData> {
    return this.http.post<UserData>('http://localhost:8080/addUser', userData);
  }

  // Update a user by ID
  updateById(userId: number, userData: UserData): Observable<UserData> {
    return this.http.put<UserData>(`http://localhost:8080/updateById/${userId}`, userData);
  }

  // Delete a user by ID
  deleteById(userId: number): Observable<UserData[]> {
    return this.http.delete<UserData[]>(`http://localhost:8080/deleteById/${userId}`);
  }
}
