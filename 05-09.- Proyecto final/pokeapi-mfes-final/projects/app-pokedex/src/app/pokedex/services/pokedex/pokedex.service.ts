// pokedex.service.ts
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GLOBAL_MFE_CONSTANTS } from '../../../../../../../projects/app-library/src/lib/constants/global-mfe-constans';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PokedexService {
  private http = inject(HttpClient);
  private readonly apiUrl = `${GLOBAL_MFE_CONSTANTS.POKEAPI_BASE}/pokemon`;

  getPokemonList(limit = 20, offset = 0): Observable<any> {
    return this.http.get(`${this.apiUrl}?limit=${limit}&offset=${offset}`);
  }

  getPokemonByName(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${name}`);
  }

}