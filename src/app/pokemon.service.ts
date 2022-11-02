import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PokeData } from './poke-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private pokemonPerPage: number = 48;
  private currentPage: number = 1;

  constructor(private http: HttpClient) { }

  getCurrentPage() {
    return this.currentPage;
  }

  getPokemonPerPage() {
    return this.pokemonPerPage;
  }

  getPokemons(): Observable<any> {
    const limit: string = String(this.currentPage * this.pokemonPerPage);
    const offset: string = String(Number(limit) - this.pokemonPerPage);

    return this.http.get<any>(
      'https://pokeapi.co/api/v2/pokemon?limit=' + limit + '&offset=' + offset);
  }

  getPokemon(url: string): Observable<PokeData> {
    return this.http.get<any>(url)
      .pipe(
        map(res => {
          return {
            imgUrl: res.sprites['front_default'],
            number: res.id,
            name: res.name,
            type: res.types
          };
        })
      );
  }

}
