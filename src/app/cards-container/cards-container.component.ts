import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonList, PokemonListType } from '../poke-data';
import { PokemonService } from '../pokemon.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})
export class CardsContainerComponent implements OnInit {

  constructor(private pokemonService: PokemonService, private router: ActivatedRoute) { }

  pokemonData?: PokemonList[];
  currentPage: number = 1;
  maxPokemon: number = 648;
  fetchUrl: string = '/pokemon';

  ngOnInit(): void {
    this.router.params.pipe(take(1)).subscribe(({typeId}) => {
      if (typeId) {
        this.fetchUrl = `/type/${typeId}`;
      };
    })
    this.nextPage();
  }
  
  getPokemonData(): void {
    const offset = (this.currentPage - 1) * 48;
    this.pokemonService.getPokemonList(`${this.fetchUrl}?offset=${offset}&limit=48`)
      .subscribe(data => {
        this.slicePokemonData(data, 648);
      });
  }

  getPokemonDataByType(): void {
    this.pokemonService.getPokemonListByType(`${this.fetchUrl}`)
      .subscribe((data: PokemonListType[]) => {
        const pokemonData = data.map(newData => {
          return newData.pokemon;
        });

        this.slicePokemonData(pokemonData, data.length);
      });
  }

  paginate(event: { page: number }) {
    this.currentPage = event.page + 1;
    this.nextPage();
  }

  nextPage() {
    if (this.fetchUrl === '/pokemon') {
      this.getPokemonData();
    } else {
      this.getPokemonDataByType();
    }
    const mainTitle = document.getElementById('main-title');
    mainTitle?.scrollIntoView();
  }
  
  slicePokemonData(data: PokemonList[], maxPokemon: number) {
    const offset = (this.currentPage - 1) * 48;
    this.maxPokemon = maxPokemon;

    if (offset + 48 > this.maxPokemon) {
      const sliceAmount = offset + 48 - this.maxPokemon;
      this.pokemonData = data.slice(0, sliceAmount);
    } else {
      this.pokemonData = data
    }
  }
  
}
