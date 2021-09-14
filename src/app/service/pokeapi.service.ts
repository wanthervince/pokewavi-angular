import { Injectable } from '@angular/core';
import{ HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  URI=''
  constructor(private httpClient: HttpClient) {
    this.URI='https://pokeapi.co/api/v2/pokemon/'
  }

  getAllPokemon() {
    return this.httpClient.get(`${this.URI}?limit=24&offset=0`)
  }
  getPokemon(name:string) {
    return this.httpClient.get(`${this.URI}${name}`)
  }
  getNextAndPreviu(url: string) {
    return this.httpClient.get(url)
  }
}
