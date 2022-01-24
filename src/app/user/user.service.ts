import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getPostList() {
        return this.http.get(`https://jsonplaceholder.typicode.com/posts`)
    }

    sendPost(data: any) {
        return this.http.post(`https://jsonplaceholder.typicode.com/posts`, data)
    }

    addUpdatePost(obj: any, type: any) {
        if (type == 'edit') {
            return this.http.put(`https://jsonplaceholder.typicode.com/posts/${obj.id}`, obj)
        } else {
            return this.http.post(`https://jsonplaceholder.typicode.com/posts`, obj)
        }
    }

    deletePost(postId: any) {
        return this.http.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    }
}