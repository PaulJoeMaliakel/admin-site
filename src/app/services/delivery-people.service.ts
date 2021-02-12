import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://192.168.0.213:8000/apis/order';

@Injectable({
  providedIn: 'root',
})
export class DeliveryPeopleService {
  constructor(private http: HttpClient) {}
  create(data) {
    return this.http.post(`${baseUrl}/boyCreate/`, data);
  }
  getAll() {
    return this.http.get(`${baseUrl}/allBoys/`);
  }

  get(id) {
    return this.http.get(`${baseUrl}/boyById/${id}`);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}/boyupdate/${id}`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/boydelete/${id}`);
  }
}
