import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'ui-components';
import { Card } from 'ui-components';
import { Login1Component, LoginFormData } from 'ui-components';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [CommonModule, Button, Card, Login1Component, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  loginLoading = false;

  onLogin(data: LoginFormData) {
    console.log('Login attempt:', data);
    this.loginLoading = true;

    setTimeout(() => {
      this.loginLoading = false;
      alert(`Login successful!\nUsername: ${data.username}`);
    }, 2000);
  }

  onRegister() {
    alert('Register clicked');
  }

  onForgotPassword(username: string) {
    alert(`Password reset requested for: ${username}`);
  }

  onSocialLogin(provider: string) {
    alert(`Social login with: ${provider}`);
  }

  onRememberMeChange(checked: boolean) {
    console.log('Remember me:', checked);
  }
}
