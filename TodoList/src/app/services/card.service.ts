import { Injectable } from '@angular/core';
import { todoData } from '../models/todoData';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http:HttpClient) { }

  addTododata(model:todoData):Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/todos`,model);
  }

  getTododata():Observable<todoData[]>{
    return this.http.get<todoData[]>(`${environment.apiBaseUrl}/api/todos`);
  }
}
