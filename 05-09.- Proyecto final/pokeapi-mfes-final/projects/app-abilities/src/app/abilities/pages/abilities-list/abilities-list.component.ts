import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { AbilitiesService } from '../../services/abilities.service';

@Component({
  selector: 'app-abilities-list',
  imports: [CommonModule],
  standalone: true,
  template: `
    <div class="grid grid-cols-1 gap-4">
      <div *ngFor="let ability of abilities()" class="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200">
        <div class="text-lg font-bold text-gray-800 capitalize">{{ ability.name }}</div>
      </div>
    </div>
  `,
})
export class AbilitiesListComponent {
  private readonly service = inject(AbilitiesService);
  readonly abilities = this.service.abilities;

  ngOnInit(): void {
    this.service.loadAbilities();
  }

}
