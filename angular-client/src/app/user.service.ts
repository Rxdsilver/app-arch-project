import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private listUrl = "http://localhost:6969/api/v1/users/list"
  private addUrl = "http://localhost:6969/api/v1/users/add"
  private updateUrl = "http://localhost:6969/api/v1/users/edit"
  private getByIdUrl = "http://localhost:6969/api/v1/users/get"
  private deleteUrl = "http://localhost:6969/api/v1/users/delete"
  private loginUrl = "http://localhost:6969/api/v1/users/login"

  constructor(private httpClient: HttpClient) { }

  getUsersList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.listUrl}`);
  }

  createUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.addUrl}`, user);
  }

  getUserById(id: number | undefined): Observable<User>{
    return this.httpClient.get<User>(`${this.getByIdUrl}/${id}`);
  }

  updateUser(id: number | undefined, user: User): Observable<Object>{
    return this.httpClient.post(`${this.updateUrl}/${id}`, user);
  }

  deleteUser(id: number | undefined): Observable<Object>{
    return this.httpClient.delete(`${this.deleteUrl}/${id}`)
  }

  loginUser(user: User): Observable<Object>{
    return this.httpClient.post(`${this.loginUrl}`, user)
  }
}
