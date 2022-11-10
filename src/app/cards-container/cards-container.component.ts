import { Component, OnInit } from '@angular/core';
import { PokemonList } from '../poke-data';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  pokemonData?: PokemonList[];

  ngOnInit(): void {
    this.getPokemonData();
  }
  
  getPokemonData(): void {
    this.pokemonService.getPokemonList('https://pokeapi.co/api/v2/pokemon?offset=0&limit=48')
      .subscribe(data => this.pokemonData = data);
  }
}
