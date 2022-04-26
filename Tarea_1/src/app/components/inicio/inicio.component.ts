import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  usuario: String = "";
  pass: String = "";


  constructor() { }

  ngOnInit(): void {
  }

  ValidarDatos(){
    if(this.usuario == ""){
      return "Digite el nombre de usuario";
    }
    if(this.pass == "" ){
      return "Digite la contraseña";
    }
    if(this.usuario != 'admin' || this.pass != '1234'){
      return "Usuario o Contraseña Incorrecta";
    }
    return "";
  }

  InicioSesion(){
    let error = this.ValidarDatos();

    if(error != ""){
      Swal.fire('Error', error,'error');
    }else{
      Swal.fire('Bienvenido', 'Bienvenido ' + this.usuario,'success');
    }
    
    
  }


}
