import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesService } from '../../services/types/types.service';

@Component({
  selector: 'app-types-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './types-list.component.html',
})
export class TypesListComponent implements OnInit {
  private readonly service = inject(TypesService);
  readonly types = this.service.types;

  ngOnInit(): void {
    this.service.loadTypes();
  }
}
