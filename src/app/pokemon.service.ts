import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { PokeData } from './poke-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor(private http: HttpClient) { }

  getPokemons(currentPage: number, pokemonPerPage: number): Observable<any> {
    const limit: string = String(currentPage * pokemonPerPage);
    const offset: string = String(Number(limit) - 50);

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
