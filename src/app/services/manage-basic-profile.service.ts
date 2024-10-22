import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManageBasicProfileService {

  private apiUrl = 'http://44.196.192.232:3127/api/categories'; 

  constructor(private http: HttpClient) { }

 
  createCategory(data: { name: string; subcategories: string[] }): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, data);
  }

  
  updateCategory(categoryId: string, data: { name: string; subcategories: string[] }): Observable<any> {
    return this.http.put(`${this.apiUrl}/${categoryId}`, data);
  }


  deleteCategory(categoryId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${categoryId}`);
  }


  getAllCategories(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }
}
