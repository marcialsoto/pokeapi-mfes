// pokedex-wrapper.component.ts
import { Component, inject, signal } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/native-federation';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-featured-types',
    standalone: true,
    imports: [
        CommonModule
    ],
    template: `
    <ng-container *ngIf="remoteComponent() as comp">
      <ng-container *ngComponentOutlet="comp" />
    </ng-container>
  `,
})
export class FeaturedTypesWrapperComponent {
    remoteComponent = signal<any>(null);

    constructor() {
        loadRemoteModule({
            remoteName: 'appTypes',
            exposedModule: './TypesFeaturedComponent',
        }).then(m => this.remoteComponent.set(m.TypesFeaturedComponent));
    }
}
