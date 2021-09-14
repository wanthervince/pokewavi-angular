import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeapiService } from 'src/app/service/pokeapi.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon:any
  name!: string
  img!: string
  nro!: string
  types: any
  typeColor!:string
  ability:any
  constructor(private pokeApiService: PokeapiService, private route: ActivatedRoute) {
    this.obtenerDato()
   }

  ngOnInit(): void {
    this.getPokemon(this.name||this.nro)
  }
  getPokemon(poke:string) {
    this.pokeApiService.getPokemon(poke).subscribe(
      res => {
        this.pokemon = res
        this.name=this.pokemon.name
        this.number(this.pokemon.id)
        this.img = this.pokemon.sprites.other.dream_world.front_default
        this.types = this.pokemon.types
        this.typeColor=this.types[0].type.name
        console.log(res)
      }
    )
  }
  obtenerDato() {
    this.name = this.route.snapshot.paramMap.get('name')!;
  }
    number(id:number) {
    if (id < 10) {
      this.nro = `000${id}`
    } else if (id < 100) {
      this.nro = `00${id}`
    } else if (id < 1000) {
      this.nro = `0${id}`
    } else if (id >= 10000) {
      this.nro=`${id}`
    }
  }

}
