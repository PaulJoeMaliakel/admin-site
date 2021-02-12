import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://192.168.0.213:8000/api';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}
  create(data) {
    return this.http.post(baseUrl, data);
  }
  getAll() {
    return this.http.get(`${baseUrl}/allusers`);
  }

  get(id) {
    return this.http.get(`${baseUrl}/userById/${id}`);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}
