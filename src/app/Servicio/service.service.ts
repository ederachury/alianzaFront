import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';
import { NgForm } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  
  constructor(private http:HttpClient) { }

  Url='http://localhost:8080/alianza/clientes';

  getClientes(){
    return this.http.get<Cliente[]>(this.Url)
  }

  createCliente(cliente:Cliente){
    return this.http.post<Cliente>(this.Url,cliente);
  }
}
