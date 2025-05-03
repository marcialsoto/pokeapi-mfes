import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { signal, effect } from '@angular/core';
import { PokedexService } from '../../services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokedex-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="p-4">
      <h2 class="text-2xl font-bold mb-4">Detalle del Pokémon</h2>
      <div *ngIf="pokemon()" class="bg-white p-6 rounded shadow-md">
        <img [src]="pokemon().sprites.front_default" alt="sprite" class="mb-4" />
        <h3 class="text-xl font-semibold">{{ pokemon().name | titlecase }}</h3>
        <p><strong>Altura:</strong> {{ pokemon().height }}</p>
        <p><strong>Peso:</strong> {{ pokemon().weight }}</p>
        <p><strong>Experiencia base:</strong> {{ pokemon().base_experience }}</p>
      </div>

      <div *ngIf="!pokemon()" class="text-gray-500">
        Cargando información...
      </div>
    </div>
  `
})
export class PokedexDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(PokedexService);

  pokemon = signal<any | null>(null);

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('id');
    if (name) {
      this.service.getPokemonByName(name).subscribe(data => {
        this.pokemon.set(data);
      });
    }
  }
}
