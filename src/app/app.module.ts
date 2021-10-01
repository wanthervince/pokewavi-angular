import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PokedexComponent } from './page/pokedex/pokedex.component';
import { PokemonComponent } from './page/pokemon/pokemon.component';
import { CardComponent } from './page/pokedex/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegionesComponent } from './page/regiones/regiones.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PokedexComponent,
    PokemonComponent,
    CardComponent,
    RegionesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
