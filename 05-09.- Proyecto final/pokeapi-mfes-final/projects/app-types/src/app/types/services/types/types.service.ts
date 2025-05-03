import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GLOBAL_MFE_CONSTANTS } from 'app-library';

@Injectable({
  providedIn: 'root'
})
export class TypesService {
  private http = inject(HttpClient);
  private readonly baseUrl = `${GLOBAL_MFE_CONSTANTS.POKEAPI_BASE}/type`;

  private _types = signal<any[]>([]);
  private _featuredTypes = signal<any[]>([]);
  readonly types = this._types.asReadonly();
  readonly featuredTypes = this._featuredTypes.asReadonly();

  loadTypes(): void {
    this.http.get<any>(this.baseUrl).subscribe((res) => {
      this._types.set(res.results || []);
    });
  }

  // Un servicio que solo muestre 3
  getTypes(limit: number): void {
    this.http.get<any>(`${this.baseUrl}?limit=${limit}`).subscribe((res) => {
      this._featuredTypes.set(res.results || []);
    });
  }

  getTypeDetail(name: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${name}`);
  }
}
