import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  pokemonData?: [];

  ngOnInit(): void {
    this.getPokemonData();
  }
  
  getPokemonData(): void {
    this.pokemonService.getPokemons()
      .subscribe(data => this.pokemonData = data.results);
  }
}
