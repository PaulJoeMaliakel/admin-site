import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/items';
 
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  create(data) {
    return this.http.post(baseUrl, data);
  }
  getAllItem( ) {
    return this.http.get(`${baseUrl}`);
  }
  getAll(id) {
    return this.http.get(`${baseUrl}/?restaurantId=${id}`);
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
