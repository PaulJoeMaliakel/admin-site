import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://192.168.0.213:8000/apis';

@Injectable({
  providedIn: 'root',
})
export class RestaurantsService {
  constructor(private http: HttpClient) {}
  create(data) {
    return this.http.post(`${baseUrl}/shop/`, data);
  }
  getAll() {
    return this.http.get(`${baseUrl}/allShops/`);
  }

  get(id) {
    return this.http.get(`${baseUrl}/getShop/${id}/`);
  }
  update(id, data) {
    return this.http.post(`${baseUrl}/shopupdate/${id}/`, data);
  }

  delete(id) {
    return this.http.delete(`${baseUrl}/shopdelete/${id}/`);
  }
}
