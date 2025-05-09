import { Component } from '@angular/core';

@Component({
  selector: 'app-btn-dark-theme',
  standalone: true,
  imports: [],
  templateUrl: './btn-dark-theme.component.html',
})
export class BtnDarkThemeComponent {
  isDark = false;

  toggleDarkTheme() {
    this.isDark = !this.isDark;

    document.documentElement.classList.toggle('dark');
  }
}
