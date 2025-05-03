import { Component, inject, OnInit, signal } from '@angular/core';
import { PokedexService } from '../../services/pokedex/pokedex.service';
import { CommonModule } from '@angular/common';
import { MFRouterLinkDirective } from '../../../../../../app-library/src/public-api';

@Component({
  selector: 'app-pokedex-list',
  imports: [CommonModule, MFRouterLinkDirective],
  templateUrl: './pokedex-list.component.html',
  styleUrl: './pokedex-list.component.css'
})
export class PokedexListComponent implements OnInit {

  private service = inject(PokedexService);

  pokemonList = signal<any[]>([]);
  isLoading = signal(true);
  error = signal<string | null>(null);

  ngOnInit(): void {
    this.loadPokemons();
  }

  loadPokemons() {
    this.isLoading.set(true);
    this.error.set(null);

    this.service.getPokemonList(20, 0).subscribe({
      next: (response) => {
        this.pokemonList.set(response.results);
        this.isLoading.set(false);
      },
      error: (err) => {
        this.error.set('Error loading Pokémon data');
        this.isLoading.set(false);
      }
    });
  }

  getPokemonImage(pokemon: any): string {
    const id = pokemon.url.split('/').filter(Boolean).pop();
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;
  }
}
