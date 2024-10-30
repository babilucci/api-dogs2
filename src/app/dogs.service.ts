import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class DogsService {
  private apiUrl = 'https://dog.ceo/api/breeds/list/all';

  constructor(private http: HttpClient) {}

  listar(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  buscarFotos(raca: string): Observable<any>{
    const url = `https://dog.ceo/api/breed/${raca}/images`
        return this.http.get(url)
  }


}
