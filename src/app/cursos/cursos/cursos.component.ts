import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../compartilhado/app-material/app-material.module';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [AppMaterialModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [
    { _id: '1', nome: 'Angular', categoria: 'Front-End' }
  ];

  displayedColumns = ['nome', 'categoria'];

  constructor() {
    //this.cursos = [];
  }

  ngOnInit(): void {

  }

}
