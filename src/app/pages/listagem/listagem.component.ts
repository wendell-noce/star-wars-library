import { ProjetcService } from './../../core/services/project.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.scss']
})
export class ListagemComponent implements OnInit {

  listaPokemons: any;

  constructor(
    private projetcService: ProjetcService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){
    this.projetcService.getPokemons().subscribe(
      data => {
        this.listaPokemons = data.results;
      }
    )
  }

}
