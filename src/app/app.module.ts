import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router'; 
import { NgForm } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Cliente/listar/listar.component';
import { EditComponent } from './Cliente/edit/edit.component';
import { AddComponent } from './Cliente/add/add.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/Servicio/service.service';
import { HttpClientModule }from '@angular/common/http'

 

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    EditComponent,
    AddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
