// src/app/user.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { productsData } from 'src/app/Store Management/Store/selector';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private currentUserKey = 'currentUser';
  private usersKey = 'users';
  private currentUserSubject = new BehaviorSubject<string | null>(this.getCurrentUser());
  productList = new BehaviorSubject<any>([]);
  productObservable=this.productList as Observable<any>;
  currentUser$ = this.currentUserSubject.asObservable();
  url = 'https://dummyjson.com/posts';

  constructor(public http: HttpClient,private store:Store) { }

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
  getProducts(){
    const productsUrl='https://fakestoreapi.com/products';
     return this.http.get(productsUrl);
  }

  private generateUniqueId(): string {
    return '_' + Math.random().toString(36).substr(2, 9);
  }

  getData() {
    return this.http.get(this.url)
  }
  storeProducts(){
// this.productList.next(this.store.pipe(select(productsData)));
// this.productList.subscribe((res)=>{
//   console.log(res,"Response...")
// })
// setTimeout(() => {
//   this.store.pipe(select(productsData)).subscribe((res)=>{
//     console.log(res,"62..")
//   })
// }, 2000);

this.store.pipe(select(productsData)).subscribe((res)=>{
 this.productList.next(res);
})

  }

}