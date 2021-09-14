import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name!:string
  title = 'Proyect10';
  constructor(private router: Router) {
  }
  pokemonDetiel() {
    if (this.name) {
      this.router.navigate(['/pokemon', this.name])
      this.name=''
    } else {
      alert('por favor indique el nombre del pokemon o el id')
    }
 }
}
