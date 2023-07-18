import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Tecnico } from 'src/app/models/tecnico';

@Component({
  selector: 'app-tecnico-list',
  templateUrl: './tecnico-list.component.html',
  styleUrls: ['./tecnico-list.component.css']
})
export class TecnicoListComponent implements OnInit{
  ELEMENT_DATA: Tecnico[] = [
    {
      id: 1,
      nome: 'Julio César',
      cpf: '103.343.304-75',
      email: 'juliodantas19@gmail.com',
      senha: 'teste123',
      perfis: ['0'],
      dataCriacao: '02/01/2023'
    }
  ]
  
  displayedColumns: string[] = ['id', 'name', 'cpf', 'email', 'actions'];
  dataSource = new MatTableDataSource<Tecnico>(this.ELEMENT_DATA);

  constructor() {}
  
  ngOnInit(): void {
  }
  
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  
  ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  }
}

