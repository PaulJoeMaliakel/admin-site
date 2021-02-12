import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { ItemService } from './services/item.service';
import { Observable } from 'rxjs';

const baseUrl = 'http://192.168.0.213:8000/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  data;
  constructor(private http: HttpClient) {}

  public signIn(userData: User) {
    return this.http.post(`${baseUrl}/login/`, userData);
    console.log(this.data);
  }
  public isLoggedIn() {
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }
  public logout() {
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
