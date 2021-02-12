import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://192.168.0.213:8000/apis/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private http: HttpClient) {}
  create(data) {
    return this.http.post(`${baseUrl}/cartadd/`, data);
  }
  getAll(id) {
    return this.http.get(`${baseUrl}/cartload/${id}`);
  }

  get(id) {
    return this.http.get(`${baseUrl}/cartload/${id}/`);
  }
  update(id, data) {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  remove(data) {
    return this.http.post(`${baseUrl}/cartremove/`, data);
  }
}
