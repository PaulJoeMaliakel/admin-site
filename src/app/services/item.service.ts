import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://192.168.0.213:8000/apis';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  constructor(private http: HttpClient) {}

  create(data) {
    return this.http.post(`${baseUrl}/itemsDetailCreate/`, data);
  }
  getAllItem() {
    return this.http.get(`${baseUrl}`);
  }
  getAll(id) {
    return this.http.get(`${baseUrl}/itemsDetailbyshop/${id}/`);
  }

  get(id) {
    return this.http.get(`${baseUrl}/itemsDetailbyid/${id}`);
  }
  update(id, data) {
    return this.http.post(`${baseUrl}/itemsupdate/${id}/`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/itemsdelete/${id}`);
  }
}
