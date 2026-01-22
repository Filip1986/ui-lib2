import { Component, signal } from '@angular/core';
import { Button } from 'ui-components';
import { Card } from 'ui-components';
import { Login1Component, Login2Component, Login3Component, LoginFormData } from 'ui-components';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, Button, Card, Login1Component, Login2Component, Login3Component],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('UI Components Library Demo');

  // Login state
  loginLoading = false;

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
