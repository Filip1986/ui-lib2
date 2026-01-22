import { Component, signal } from '@angular/core';
import { Button } from 'ui-components';
import { Card } from 'ui-components';
import { Login1Component, Login2Component, Login3Component, LoginFormData } from 'ui-components';
import { CommonModule } from '@angular/common';
import { Menu } from 'primeng/menu';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Button, Card, Login1Component, Login2Component, Login3Component, Menu],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('UI Components Library Demo');

  // Menu items with groups
  menuItems: MenuItem[] = [
    {
      label: 'Components',
      items: [
        {
          label: 'Button',
          icon: 'pi pi-fw pi-circle',
          command: () => this.scrollToSection('buttons')
        },
        {
          label: 'Card',
          icon: 'pi pi-fw pi-id-card',
          command: () => this.scrollToSection('cards')
        },
        {
          label: 'Login Forms',
          icon: 'pi pi-fw pi-sign-in',
          command: () => this.scrollToSection('login')
        }
      ]
    },
    {
      label: 'Documentation',
      items: [
        {
          label: 'Getting Started',
          icon: 'pi pi-fw pi-book',
          command: () => alert('Navigate to Getting Started')
        },
        {
          label: 'API Reference',
          icon: 'pi pi-fw pi-code',
          command: () => alert('Navigate to API Reference')
        },
        {
          label: 'Examples',
          icon: 'pi pi-fw pi-file',
          command: () => alert('Navigate to Examples')
        }
      ]
    },
    {
      label: 'Resources',
      items: [
        {
          label: 'GitHub',
          icon: 'pi pi-fw pi-github',
          url: 'https://github.com',
          target: '_blank'
        },
        {
          label: 'Support',
          icon: 'pi pi-fw pi-question-circle',
          command: () => alert('Contact Support')
        },
        {
          separator: true
        },
        {
          label: 'About',
          icon: 'pi pi-fw pi-info-circle',
          command: () => alert('UI Components Library v1.0.0')
        }
      ]
    }
  ];

  // Login state
  loginLoading = false;

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onLogin(data: LoginFormData) {
    console.log('Login attempt:', data);
    this.loginLoading = true;

    // Simulate API call
    setTimeout(() => {
      this.loginLoading = false;
      alert(`Login successful!\nUsername: ${data.username}\nRemember Me: ${data.rememberMe}`);
    }, 2000);
  }

  onRegister() {
    console.log('Register clicked');
    alert('Navigate to registration page');
  }

  onForgotPassword(email: string) {
    console.log('Forgot password clicked', email);
    alert(`Password reset link will be sent to: ${email || 'your email'}`);
  }

  onSocialLogin(provider: string) {
    console.log('Social login clicked:', provider);
    alert(`Login with ${provider}`);
  }

  onRememberMeChange(checked: boolean) {
    console.log('Remember me changed:', checked);
  }
}
