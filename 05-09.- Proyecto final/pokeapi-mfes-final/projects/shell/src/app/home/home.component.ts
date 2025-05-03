import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TypesWrapperComponent } from '../wrappers/types-wrapper.component';
import { FeaturedTypesWrapperComponent } from "../wrappers/featured-types-wrapper.component";
import { FeaturedAbilitiesWrapperComponent } from '../wrappers/featured-abilities-wrapper.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, TypesWrapperComponent, FeaturedTypesWrapperComponent, FeaturedAbilitiesWrapperComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
