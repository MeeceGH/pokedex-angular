import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonList } from 'src/app/poke-data';
import { PokemonService } from 'src/app/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() pokeData?: PokemonList;

  pokemon?: Pokemon;

  pokeImg?: string;
  id?: string;
  color?: string;


  colors: any = {
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
    this.pokemonService.getPokemon('https://pokeapi.co/api/v2/pokemon/' + this.pokeData?.name)
      .subscribe(data => {
        this.pokemon = data;
        this.id = '#' + String(this.pokemon?.id).padStart(3, '0');
        this.color = this.getColor();
      });
  }

  getPokemonTypeOne() {
    return this.pokemon?.types[0].type.name;
  }

  getPokemonTypeTwo() {
    if (this.pokemon?.types[1]) {
      return '/ ' + String(this.pokemon?.types[1].type.name);
    } else return '';
  }

  getColor() {
    const type = this.getPokemonTypeOne();
    const color = this.colors[String(type)];
    return '#' + color + '75';
  }

}
