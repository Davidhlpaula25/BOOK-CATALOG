import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from './book';

@Injectable({
    providedIn: 'root'
})
export class BookService {
    private apiUrl = 'http://localhost:8080/api/books';
    constructor(private http: HttpClient) { }
    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(this.apiUrl);
    }
    addBook(book: Book): Observable<Book> {
        return this.http.post<Book>(this.apiUrl, book);
    }
}
