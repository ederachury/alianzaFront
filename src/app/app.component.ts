import { Component } from '@angular/core';
import { Router } from '@angular/router';
 import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Alianza';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"])
  }

  Nuevo(){
    this.router.navigate(["add"])
  }  
}
