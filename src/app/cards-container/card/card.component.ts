import { Component, Input, OnInit } from '@angular/core';
import { PokeData } from 'src/app/poke-data';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokeData?: string;
  @Input() index: number = 1;

  pokemon?: PokeData;
  pokemonImg?: String;

  colors = {
    normal: 'A8A77A',
    fire: 'EE8130',
    water: '6390F0',
    electric: 'F7D02C',
    grass: '7AC74C',
    ice: '96D9D6',
    fighting: 'C22E28',
    poison: 'A33EA1',
    ground: 'E2BF65',
    flying: 'A98FF3',
    psychic: 'F95587',
    bug: 'A6B91A',
    rock: 'B6A136',
    ghost: '735797',
    dragon: '6F35FC',
    dark: '705746',
    steel: 'B7B7CE',
    fairy: 'D685AD'
  };

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getPokemon('https://pokeapi.co/api/v2/pokemon/' + String(this.index + 1))
      .subscribe(data => {
        this.pokemon = data;
      });
  }

}
