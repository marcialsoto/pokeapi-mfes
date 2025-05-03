import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { signal, effect } from '@angular/core';
import { PokedexService } from '../../services/pokedex/pokedex.service';

@Component({
  selector: 'app-pokedex-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex-detail.component.html',
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
