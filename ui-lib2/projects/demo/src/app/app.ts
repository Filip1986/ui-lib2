import { Component } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Menubar } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, Menubar],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      command: () => this.navigate('/')
    },
    {
      label: 'Components',
      icon: 'pi pi-th-large',
      items: [
        {
          label: 'Buttons',
          icon: 'pi pi-circle',
          command: () => this.navigate('/buttons')
        },
        {
          label: 'Cards',
          icon: 'pi pi-id-card',
          command: () => this.navigate('/cards')
        },
        {
          label: 'Login Forms',
          icon: 'pi pi-sign-in',
          command: () => this.navigate('/login')
        }
      ]
    },
    {
      label: 'Documentation',
      icon: 'pi pi-book',
      items: [
        {
          label: 'Getting Started',
          icon: 'pi pi-play',
          command: () => alert('Navigate to Getting Started')
        },
        {
          label: 'API Reference',
          icon: 'pi pi-code',
          command: () => alert('Navigate to API Reference')
        }
      ]
    },
    {
      label: 'Resources',
      icon: 'pi pi-external-link',
      items: [
        {
          label: 'GitHub',
          icon: 'pi pi-github',
          url: 'https://github.com',
          target: '_blank'
        },
        {
          label: 'Support',
          icon: 'pi pi-question-circle',
          command: () => alert('Contact Support')
        }
      ]
    }
  ];

  constructor(private router: Router) {}

  navigate(path: string) {
    this.router.navigate([path]);
  }
}
