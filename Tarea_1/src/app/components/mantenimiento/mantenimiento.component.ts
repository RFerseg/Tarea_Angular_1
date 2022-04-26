import { Component } from '@angular/core';
import { Articulo } from 'src/app/models/articulos.model';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mantenimiento',
  templateUrl: './mantenimiento.component.html',
  styleUrls: ['./mantenimiento.component.css']
})
export class MantenimientoComponent {

  //Variables
  nuevoArticulo: Articulo = new Articulo();

  lista: Articulo [] = [];

  constructor() { }

  ngOnInit() {
  }

  Guardar(){
    this.ObtenerPrecioFinal();
    let error = this.ValidarArticulo();
    if(error != ""){
      Swal.fire('Error', error,'error');
    }else{
      this.lista.push(this.nuevoArticulo);
      this.nuevoArticulo = new Articulo();
    }
      
  }

  ValidarArticulo(){
    if(this.nuevoArticulo.codigoArticulo <= 0){
      return "El código del artículo debe ser mayor a 0";
    }

    if(this.nuevoArticulo.nombre.length == 0){
      return "Digite un nombre"
    }

    if(this.nuevoArticulo.precio <= 0){
      return "Digite un precio mayor a 0";
    }

    if(this.nuevoArticulo.impuesto <= 0){
      return "Digite un impuesto mayor o igual a 0"
    }
    
    for (let elemento of this.lista){
      if(this.nuevoArticulo.codigoArticulo == elemento.codigoArticulo){
        return "Ese código de artículo ya fue registrado";
      }
    }
    return "";
  }

  ObtenerPrecioFinal(){
    this.nuevoArticulo.precioFinal = this.nuevoArticulo.precio + (this.nuevoArticulo.precio * this.nuevoArticulo.impuesto);
  }

}
