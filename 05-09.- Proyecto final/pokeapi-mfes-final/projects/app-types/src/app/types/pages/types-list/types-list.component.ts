import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesService } from '../../services/types/types.service';

@Component({
  selector: 'app-types-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid grid-cols-1 gap-4">
      <div *ngFor="let type of types()" class="bg-white rounded-lg shadow-md p-4 text-center border border-gray-200">
        <div class="text-lg font-bold text-gray-800 capitalize">{{ type.name }}</div>
      </div>
    </div>
  `,
})
export class TypesListComponent implements OnInit {
  private readonly service = inject(TypesService);
  readonly types = this.service.types;

  ngOnInit(): void {
    this.service.loadTypes();
  }
}
