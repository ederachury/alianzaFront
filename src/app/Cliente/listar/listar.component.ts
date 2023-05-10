import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../../Servicio/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  
  clientes:Cliente[] | undefined;

  constructor(private service:ServiceService, private router:Router){}

  ngOnInit(){
    this.service.getClientes()
    .subscribe(data=>{
      this.clientes=data;
    })
  }
}
