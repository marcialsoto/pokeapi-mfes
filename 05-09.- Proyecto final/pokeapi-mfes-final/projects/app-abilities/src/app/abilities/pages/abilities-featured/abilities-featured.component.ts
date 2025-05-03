import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { AbilitiesService } from '../../services/abilities.service';

@Component({
  selector: 'app-abilities-featured',
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 gap-1 my-2">
      <div *ngFor="let type of featuredAbilities()" class="bg-white rounded-lg shadow-md p-2 text-center border border-gray-200">
        <div class="text-sm text-gray-800 capitalize">{{ type.name }}</div>
      </div>
      ...
    </div>
  `,
})
export class AbilitiesFeaturedComponent {

  private readonly service = inject(AbilitiesService);
  readonly featuredAbilities = this.service.featuredAbilities;

  ngOnInit(): void {
    this.service.getAbilities(3);
  }
}
