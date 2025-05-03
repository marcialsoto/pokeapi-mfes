import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL_MFE_CONSTANTS } from 'app-library';

@Injectable({
  providedIn: 'root'
})
export class AbilitiesService {
  private http = inject(HttpClient);
  private readonly baseUrl = `${GLOBAL_MFE_CONSTANTS.POKEAPI_BASE}/ability`;

  private _abilities = signal<any[]>([]);
  private _featuredAbilities = signal<any[]>([]);
  readonly abilities = this._abilities.asReadonly();
  readonly featuredAbilities = this._featuredAbilities.asReadonly();

  loadAbilities(): void {
    this.http.get<any>(this.baseUrl).subscribe((res) => {
      this._abilities.set(res.results || []);
    });
  }

  // Un servicio que solo muestre 3
  getAbilities(limit: number): void {
    this.http.get<any>(`${this.baseUrl}?limit=${limit}`).subscribe((res) => {
      this._featuredAbilities.set(res.results || []);
    });
  }

  getAbilityDetail(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
