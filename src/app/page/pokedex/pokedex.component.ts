import { Component, Input, OnInit } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent implements OnInit {
  name!: string;
  listPokemon: any;
  results: any;
  constructor(private pokeApiService: PokeapiService, private router: Router) {}

  ngOnInit(): void {
    this.pokeApiService.getAllPokemon().subscribe((res) => {
      this.listPokemon = res;
      this.results = this.listPokemon.results;
    });
  }
  pokemonDetiel() {
    if (this.name) {
      this.router.navigate(['/pokemon', this.name]);
      this.name = '';
    } else {
      alert('por favor indique el nombre del pokemon o el id');
    }
  }

  nextAndPreviu(url: string) {
    if (url === null) {
      alert('Estas En la primera Pagina de la Lista');
    } else {
      this.pokeApiService.getNextAndPreviu(url).subscribe((res) => {
        this.listPokemon = res;
        this.results = this.listPokemon.results;
      });
    }
  }
}
