// src/app/user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserKey = 'currentUser';
  private usersKey = 'users';
  private currentUserSubject = new BehaviorSubject<string | null>(this.getCurrentUser());

  currentUser$ = this.currentUserSubject.asObservable();
  url ='https://dummyjson.com/posts';

  constructor(public http:HttpClient) {}

  setCurrentUser(userId: string) {
    localStorage.setItem(this.currentUserKey, userId);
    this.currentUserSubject.next(userId);
  }

  getCurrentUser(): string | null {
    return localStorage.getItem(this.currentUserKey);
  }

  addUser(username: string) {
    const users = this.getUsers();
    if (!users.some(user => user.username === username)) {
      const userId = this.generateUniqueId();
      users.push({ userId, username });
      localStorage.setItem(this.usersKey, JSON.stringify(users));
    }
  }

  getUsers(): { userId: string, username: string }[] {
    const users = localStorage.getItem(this.usersKey);
    return users ? JSON.parse(users) : [];
  }

  private generateUniqueId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  getData(){
    return this.http.get(this.url)
  }


}