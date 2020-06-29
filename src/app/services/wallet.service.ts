import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:3000/wallet';

@Injectable({
  providedIn: 'root'
})
export class WalletService {
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
