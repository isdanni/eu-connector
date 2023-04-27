import { Component } from '@angular/core';

import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

import { environment } from '../environments/environment';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    CapacitorGoogleMaps.initialize({
      key: environment.mapsKey
    });
  }
}

