import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Login1Component, Login2Component, Login3Component, LoginFormData } from 'ui-components';

@Component({
  selector: 'app-login',
  imports: [CommonModule, Login1Component, Login2Component, Login3Component],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
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
