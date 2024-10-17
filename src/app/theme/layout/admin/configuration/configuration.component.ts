// angular import
import { Component, OnInit, NgZone } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

// project import
import { BerryConfig } from 'src/app/app-config';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit {
  rtlLayout!: boolean;
  bodyColor!: string;
  darkLayout!: boolean;
  boxLayout!: boolean;
  headerColor!: string;
  navbarColor!: string;
  fontFamily!: string;

  constructor(private zone: NgZone, private location: Location, private locationStrategy: LocationStrategy) {}

  ngOnInit(): void {
    if ((this.rtlLayout = BerryConfig.isRtl)) {
      (document.querySelector('body') as HTMLBodyElement).classList.add('berry-rtl');
    }
    if ((this.darkLayout = BerryConfig.isDarkLayout)) {
      (document.querySelector('body') as HTMLBodyElement).classList.add('berry-dark');
      (document.querySelector('.coded-navbar') as HTMLDivElement).classList.add('navbar-dark');
      (document.querySelector('.coded-header') as HTMLDivElement).classList.add('header-dark');
    }
    if ((this.boxLayout = BerryConfig.isBoxLayout)) {
      (document.querySelector('.coded-content') as HTMLDivElement).classList.add('container');
    }
    if ((this.bodyColor = BerryConfig.bodyColor)) {
      (document.querySelector('body') as HTMLBodyElement).part.add(this.bodyColor);
    }
    if ((this.headerColor = BerryConfig.headerBackColor)) {
      (document.querySelector('.coded-header') as HTMLDivElement).classList.add(this.headerColor);
    }
    if ((this.navbarColor = BerryConfig.navBackColor)) {
      (document.querySelector('.coded-navbar') as HTMLDivElement).classList.add(this.navbarColor);
    }
    if ((this.fontFamily = BerryConfig.fontFamily)) {
      (document.querySelector('body') as HTMLBodyElement).classList.add(this.fontFamily);
    }
  }
}
