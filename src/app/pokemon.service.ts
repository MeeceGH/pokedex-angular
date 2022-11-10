import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, of } from 'rxjs';
import { Pokemon, PokemonList, PokemonListDto } from './poke-data';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemonList(url: string): Observable<PokemonList[]> {
    return this.http.get<PokemonListDto>(url)
      .pipe(switchMap(res => {
        return of(res.results);
      }));
  }

  getPokemon(url: string): Observable<Pokemon> {
    return this.http.get<Pokemon>(url);
  }
}
