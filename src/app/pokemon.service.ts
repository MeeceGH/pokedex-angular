import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, of } from 'rxjs';
import { Pokemon, PokemonList, PokemonListDto, PokemonListType, PokemonListTypeDto } from './poke-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl: string = 'https://pokeapi.co/api/v2';

  constructor(private http: HttpClient) { }

  getPokemonList(url: string): Observable<PokemonList[]> {
    return this.http.get<PokemonListDto>(this.baseUrl + url)
      .pipe(switchMap(res => {
        return of(res.results);
      }));
  }

  getPokemonListByType(url: string): Observable<PokemonListType[]> {
    return this.http.get<any>(this.baseUrl + url)
      .pipe(switchMap(res => {
        return of(res.pokemon);
      }));
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}
