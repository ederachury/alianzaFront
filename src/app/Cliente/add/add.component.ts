import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService} from '../../Servicio/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';
import { FormControl } from '@angular/forms';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent  implements OnInit{
 
  
  constructor(
    private router:Router, private service:ServiceService
    ){
       
      }

  ngOnInit(){
  }
 
 
  onClickSubmit(cliente: Cliente){
    //debugger;
    console.log(cliente.sharedkey);
    this.service.createCliente(cliente)
    .subscribe(data=>{
      alert("It was stored satisfactorily");
      this.router.navigate(["listar"]);
    })
  }
 
}
