import { Component } from '@angular/core';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housing-location';
import { ActivatedRoute } from '@angular/router';
import { CommonModule
 } from '@angular/common';
@Component({
  selector: 'app-details',
  imports: [CommonModule],
  template: `
    <p>
      details works! {{housingLocationId}}
    </p>
  `,
  styles: ``
})
export class DetailsComponent {
  housingService = inject(HousingService);
  
  housingLocation: HousingLocation | undefined

  constructor() {
    const housingLocationId = Number (this.r)
  }

}


