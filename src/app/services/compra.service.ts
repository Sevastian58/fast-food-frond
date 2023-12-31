import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Compra } from '../models/compra';

@Injectable({providedIn: 'root'})
export class CompraService {
  constructor(private http:HttpClient) {
   }
   
   private apiUrl:string = 'http://localhost:8090/compra';

   save(compra:Compra):Observable<Compra>{
    const url = `${this.apiUrl}/grabar`
    return this.http.post<Compra>(url, compra);
  }

}
