import { Injectable } from "@angular/core";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Item } from "./item";

@Injectable({
  providedIn: "root",
})
export class RestService {
  private REST_API_SERVER = "http://127.0.0.1:8000/api/tasks";

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.REST_API_SERVER);
  }

  createTask(data) {
    return this.httpClient.post<Item>(this.REST_API_SERVER, data);
  }

  updateTask(id, data) {
    return this.httpClient.put<Item>(`${this.REST_API_SERVER}/${id}`, data);
  }

  delete(id) {
    return this.httpClient.delete<Item>(`${this.REST_API_SERVER}/${id}`);
  }
}
