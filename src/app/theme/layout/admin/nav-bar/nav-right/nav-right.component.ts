// Angular import
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioLoginResult } from 'src/app/theme/shared/model/auth/login/login-result.interface';
import { SessionService } from 'src/app/theme/shared/service/global/session.service';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss']
})
export class NavRightComponent {

  currentUser!: UsuarioLoginResult;
  constructor(
    private sessionService: SessionService,
    private router: Router,
    // private translate: TranslateService
  ) {
    const user = this.sessionService.getUser();
    if (user) {
      this.currentUser = user;
    }
  }

  componentSections = [
    {
      title: 'UI Components',
      items: [
        {
          title: 'Alerts',
          url: '#'
        },
        {
          title: 'Accordions',
          url: '#'
        },
        {
          title: 'DropDown',
          url: '#'
        },
        {
          title: 'Badges',
          url: '#'
        },
        {
          title: 'Breadcrumbs',
          url: '#'
        }
      ]
    },
    {
      title: 'Application',
      items: [
        {
          title: 'Chat',
          url: '#'
        },
        {
          title: 'Kanban',
          url: '#'
        },
        {
          title: 'Mail',
          url: '#'
        },
        {
          title: 'Calendar',
          url: '#'
        },
        {
          title: 'E-Commerce',
          url: '#'
        }
      ]
    },
    {
      title: 'Advance Components',
      items: [
        {
          title: 'Sweet Alert',
          url: '#'
        },
        {
          title: 'Light Box',
          url: '#'
        },
        {
          title: 'Modal',
          url: '#'
        },
        {
          title: 'Notification',
          url: '#'
        },
        {
          title: 'Tree View',
          url: '#'
        }
      ]
    }
  ];
  notification = [
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'John Doe',
      time: '2 min ago',
      text: 'It is a long established fact that a reader will be distracted',
      badgeType: true,
      mailType: false,
      imagesType: false,
      conformation: false,
      iconType: false
    },
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'Store Verification Done',
      time: '3 min ago',
      text: 'We have successfully received your request.',
      badgeType: true,
      mailType: false,
      imagesType: false,
      conformation: false,
      iconType: true
    },
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-primary',
      icon: 'ti ti-mailbox',
      title: 'Check Your Mail.',
      time: '5 min ago',
      text: "All done! Now check your inbox as you're in for a sweet treat!",
      badgeType: false,
      mailType: true,
      imagesType: false,
      conformation: false,
      iconType: true
    },
    {
      images: 'assets/images/user/avatar-2.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'John Doe',
      time: '8 min ago',
      text: 'Uploaded two file on 21Jan 2020',
      badgeType: false,
      mailType: false,
      imagesType: true,
      conformation: false,
      iconType: false
    },
    {
      images: 'assets/images/user/avatar-3.jpg',
      background: 'bg-light-success',
      icon: 'ti ti-building-store',
      title: 'John Doe',
      time: '10 min ago',
      text: 'It is a long established fact that a reader will be distracted',
      badgeType: false,
      mailType: false,
      imagesType: false,
      conformation: true,
      iconType: false
    }
  ];

  onGoMenu(): void {
    this.router.navigate(['/home/menu-modulo']);
  }

  onGoSede(): void {
    this.router.navigate(['/auth/login/3']);
  }
  
  logout() {    
    this.router.navigate(['/auth/login']);
    this.sessionService.logout();
  }
}
