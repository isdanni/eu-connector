import { Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import { environment } from 'src/environments/environment';
import { Location, Locations } from '../interfaces/location';
import { MarkerEl } from '../interfaces/marker';

import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

import { AfterContentInit, OnInit} from '@angular/core';

import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],

})

export class Tab1Page{

  constructor() { }

  @ViewChild('map') mapView!: ElementRef;

  ionViewDidEnter() {
    this.createMap();
  }

  createMap() {
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;

    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      zoom: 5
    });

    CapacitorGoogleMaps.addListener('onMapReady', async () => {
      CapacitorGoogleMaps.setMapType({
        type: "normal" // hybrid, satellite, terrain
      });

      this.showCurrentPosition();
    });
  }

  async showCurrentPosition() {
    // todo
  }

  ionViewDidLeave() {
    CapacitorGoogleMaps.close();
  }

}
