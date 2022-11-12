import { Component, Input, OnInit } from '@angular/core';
import { Pokemon, PokemonList } from '../../poke-data';
import { PokemonService } from '../../pokemon.service';
import { COLORS } from '../../constants/colors';

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

  colors: any = COLORS;

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
