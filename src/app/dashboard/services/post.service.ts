import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Post } from '../dashboard.models';

@Injectable({ providedIn: 'root' })
export class PostService {
  constructor(private http: HttpClient) {}

  getWall(): Observable<Post[]> {
    return this.http.get<Post[]>(`${environment.apiBaseUrl}/user/wall`);
  }

  addPost(content: string, userId?: string): Observable<Post> {
    const path = userId ? `/${userId}` : '';

    return this.http.post<Post>(`${environment.apiBaseUrl}/post${path}`, {
      content
    });
  }

  addComment(postId: string, message: string) {
    return this.http.post<Comment>(
      `${environment.apiBaseUrl}/post/${postId}/comment`,
      {
        message
      }
    );
  }
}
