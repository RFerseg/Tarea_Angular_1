export class Articulo{
    constructor(
        public codigoArticulo: number = 0,
        public nombre: string = "",
        public precio: number = 0,
        public impuesto: number = 0,
        public precioFinal: number =0
    ){}
}