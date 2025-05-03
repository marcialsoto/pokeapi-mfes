import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesService } from '../../services/types/types.service';

@Component({
  selector: 'app-types-featured',
  imports: [
    CommonModule,
  ],
  template: `
    <div class="grid grid-cols-1 gap-1 my-2">
      <div *ngFor="let type of featuredTypes()" class="bg-white rounded-lg shadow-md p-2 text-center border border-gray-200">
        <div class="text-sm text-gray-800 capitalize">{{ type.name }}</div>
      </div>
      ...
    </div>
  `,
})
export class TypesFeaturedComponent implements OnInit {
  private readonly service = inject(TypesService);
  readonly featuredTypes = this.service.featuredTypes;

  ngOnInit(): void {
    this.service.getTypes(3);
  }
}
