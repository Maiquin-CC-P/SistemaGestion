// Angular import
import { Component, Input } from '@angular/core';
import { Location, LocationStrategy } from '@angular/common';

// Project import
import { NavigationItem } from '../../navigation';
import { BerryConfig } from 'src/app/app-config';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  // public props
  @Input() item!: NavigationItem;
  themeLayout: string;

  // Constructor
  constructor(private location: Location, private locationStrategy: LocationStrategy) {
    this.themeLayout = BerryConfig.layout;
  }

  // public method
  closeOtherMenu(event: MouseEvent) {
    if (BerryConfig.layout === 'vertical') {
      const ele = event.target as HTMLElement;
      if (ele !== null && ele !== undefined) {
        const parent = ele.parentElement as HTMLElement;
        const up_parent = ((parent.parentElement as HTMLElement).parentElement as HTMLElement).parentElement as HTMLElement;
        const last_parent = up_parent.parentElement;
        const sections = document.querySelectorAll('.coded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('active');
          sections[i].classList.remove('coded-trigger');
        }

        if (parent.classList.contains('coded-hasmenu')) {
          parent.classList.add('coded-trigger');
          parent.classList.add('active');
        } else if (up_parent.classList.contains('coded-hasmenu')) {
          up_parent.classList.add('coded-trigger');
          up_parent.classList.add('active');
        } else if (last_parent?.classList.contains('coded-hasmenu')) {
          last_parent.classList.add('coded-trigger');
          last_parent.classList.add('active');
        }
      }
      if (document.querySelector('app-navigation.coded-navbar')?.classList.contains('mob-open')) {
        document.querySelector('app-navigation.coded-navbar')?.classList.remove('mob-open');
      }
    } else {
      setTimeout(() => {
        const sections = document.querySelectorAll('.coded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove('active');
          sections[i].classList.remove('coded-trigger');
        }

        let current_url = this.location.path();
        const baseHref = this.locationStrategy.getBaseHref();
        if (baseHref) {
          current_url = baseHref + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
          const parent = ele.parentElement;
          const up_parent = parent?.parentElement?.parentElement;
          const last_parent = up_parent?.parentElement;
          if (parent?.classList.contains('coded-hasmenu')) {
            parent.classList.add('active');
          } else if (up_parent?.classList.contains('coded-hasmenu')) {
            up_parent.classList.add('active');
          } else if (last_parent?.classList.contains('coded-hasmenu')) {
            last_parent.classList.add('active');
          }
        }
      }, 500);
    }
  }
}
