export interface PostCollection {
  [key: string]: PostResponse;
}

export interface PostResponse {
  likes: string[];
  author: Author;
  owner: Author;
  content: string;
  comments: Comment[];
  createdAt: number;
  id: string;
}

export interface Author {
  uuid: string;
  avatarUrl: string;
  fullName: string;
}

export interface Comment {
  author: Author;
  message: string;
  createdAt: number;
  id: string;
}
