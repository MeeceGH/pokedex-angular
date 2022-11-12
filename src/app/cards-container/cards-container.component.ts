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
  currentPage: number = 1;
  maxPokemon = 648;

  ngOnInit(): void {
    this.nextPage();
  }
  
  getPokemonData(): void {
    const offset = (this.currentPage - 1) * 48;
    this.pokemonService.getPokemonList(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=48`)
      .subscribe(data => {
        if (offset + 48 > this.maxPokemon) {
          const sliceAmount = offset + 48 - this.maxPokemon;
          this.pokemonData = data.slice(0, sliceAmount);
        } else {
          this.pokemonData = data
        }
      });
  }

  paginate(event: { page: number }) {
    this.currentPage = event.page + 1;
    this.nextPage();
  }

  nextPage() {
    this.getPokemonData();
  }
  
}
