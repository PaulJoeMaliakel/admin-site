import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://192.168.0.213:8000/apis/order';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  constructor(private http: HttpClient) {}
  create(data) {
    return this.http.post(`${baseUrl}/OrderDetail/`, data);
  }
  getAll() {
    return this.http.get(`${baseUrl}/getOrderDetails/`);
  }
  getorders() {
    return this.http.get(`${baseUrl}/getOrder/`);
  }
  updateorder(id, data) {
    return this.http.post(`${baseUrl}/postorderupdate/${id}/`, data);
  }

  get(id) {
    return this.http.get(`${baseUrl}/getOrderbyId/${id}/`);
  }
  getOrdersByUserId(id) {
    return this.http.get(`${baseUrl}/getOrderByUserId/${id}/`);
  }
  update(id, data) {
    return this.http.post(`${baseUrl}/shopupdate/${id}/`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/shopdelete/${id}/`);
  }

  getReport(f, t) {
    return this.http.get(`${baseUrl}/getReport/${f}/${t}/`);
  }
}
