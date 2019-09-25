import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'pipes';
  nombre = 'Fernando';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  a = 0.234;
  salario = 1234.5;

  miHeroe = {
    nombre: 'Wolverine',
    Clave: 'Logan',
    direccion: {
      calle: 'primer',
      casa: '19'
    }
  };

  fecha = new Date();

  nombre1 = 'fernando';
  nombre2 = 'FeRNANdo RUIz';

  valorPromesa = new Promise ( (resolve, reject ) => {
     setTimeout( () => resolve ( 'Hola resolve' ), 3500 );
  });

  video = 'u9nYCHkphnY';

  activar = false;




}
