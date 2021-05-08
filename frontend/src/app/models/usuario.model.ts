export class Usuario {

  constructor(

    public nombre: string,
    public uid: string,
    public user_name?: string,
    public password?: string,
    public img?: string,
  ) { }

  imprimirUSuario() {
    console.log(this.nombre);
  }

}
