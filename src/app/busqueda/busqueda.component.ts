import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  constructor() { }

  termo: string;

  ngOnInit(): void {}
    buscar(form) {
      location.href = `/resultados/${form.value.termo}`;

     
    }

}
