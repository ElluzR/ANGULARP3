import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {

  constructor(private http: HttpClient) { }
  private key = `omy7w8rPALpZTwi6BOwMA8Et2tMKcLyq`;
  private limit = '24';
  private url = `https://api.giphy.com/v1/gifs/search`;
  getImagem(E) {
    let url = `${this.url}?api_key=${this.key}&q=${E}&limit=${this.limit}&offset=0&rating=g&lang=en`;
    console.log(url);
    return this.http.get(url);
  }
}
