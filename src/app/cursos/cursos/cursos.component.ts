import { Component, OnInit } from '@angular/core';
import { AppMaterialModule } from '../../compartilhado/app-material/app-material.module';
import { Curso } from '../model/curso';
import { CursosService } from '../services/cursos.service';

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

  //cursosService: CursosService;

  constructor(private cursosService: CursosService) {
    //this.cursos = [];
    //this.cursosService = new CursosService();
    this.cursos = this.cursosService.lista();
  }

  ngOnInit(): void {

  }

}
