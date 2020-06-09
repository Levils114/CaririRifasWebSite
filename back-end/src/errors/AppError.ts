export default class AppError{ // criando uma classe para possíveis erros
  public readonly message: string; //tipando a variável message como string
 
  public readonly statusCode: number; // tipando a variável statusCode como number

  constructor( message: string, statusCode = 400){ // criando um construtor
      this.message = message; // dizendo que a variável message vai ser igual a message tipada ali encima
      this.statusCode = statusCode; // dizendo que a variável statusCode vai ser igual a statusCode tipada ali encima
  }
}