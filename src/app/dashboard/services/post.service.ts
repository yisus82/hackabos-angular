import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PostResponse } from '../dashboard.models';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  constructor(private http: HttpClient) {}

  getWall(): Observable<PostResponse[]> {
    return this.http.get<PostResponse[]>(`${environment.apiBaseUrl}/user/wall`);
  }
}
