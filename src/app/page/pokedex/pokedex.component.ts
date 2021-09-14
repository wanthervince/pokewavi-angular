import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  listPokemon: any;
  results:any
  constructor( private pokeApiService: PokeapiService) { }

  ngOnInit(): void {
    this.pokeApiService.getAllPokemon().subscribe(
      res => {
        this.listPokemon = res;
        this.results = this.listPokemon.results;
      }
    )
  }

  nextAndPreviu(url: string) {
    if (url === null) {
      alert('Estas En la primera Pagina de la Lista')
    } else {
      this.pokeApiService.getNextAndPreviu(url).subscribe(
        res => {
          this.listPokemon = res;
          this.results = this.listPokemon.results;
        }
      )
    }
  }

}
