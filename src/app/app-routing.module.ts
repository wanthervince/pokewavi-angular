import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexComponent } from './page/pokedex/pokedex.component';
import { PokemonComponent } from './page/pokemon/pokemon.component';
import { RegionesComponent } from './page/regiones/regiones.component';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent,
  },
  {
    path: 'pokemon/:name',
    component: PokemonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
