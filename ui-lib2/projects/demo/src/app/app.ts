import { Component, signal } from '@angular/core';
import { Button } from 'ui-components';
import { Card } from 'ui-components';

@Component({
  selector: 'app-root',
  imports: [Button, Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('UI Components Library Demo');
}
