import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/delivery-man';
 
@Injectable({
  providedIn: 'root'
})
export class DeliveryPeopleService {

  constructor(private http: HttpClient) { }
  create(data) {
    return this.http.post(baseUrl, data);
  }
  getAll() {
    return this.http.get(baseUrl);
  }

  get(id) {
    return this.http.get(`${baseUrl}/${id}`);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}

