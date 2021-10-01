import { Component, OnInit, Input } from '@angular/core';
import { PokeapiService } from 'src/app/service/pokeapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() name!: string;
  pokemon!: any;
  img!: string;
  nro!: string;
  typeColor!: string;
  typess: any;
  constructor(private pokeApiService: PokeapiService, private router: Router) {}

  ngOnInit(): void {
    this.pokeApiService.getPokemon(this.name).subscribe((res) => {
      this.pokemon = res;
      this.img = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${this.pokemon.id}.gif`;
      this.number(this.pokemon.id);
      this.typess = this.pokemon.types;
      this.typeColor = this.typess[0].type.name;
    });
  }
  number(id: number) {
    if (id < 10) {
      this.nro = `000${id}`;
    } else if (id < 100) {
      this.nro = `00${id}`;
    } else if (id < 1000) {
      this.nro = `0${id}`;
    } else if (id >= 10000) {
      this.nro = `${id}`;
    }
  }
  pokemonDetiel() {
    this.router.navigate(['/pokemon', this.name]);
  }
}
