import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Curso } from '../model/curso';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [MatTableModule],
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
