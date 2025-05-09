import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-btn-delete-text',
  standalone: true,
  imports: [],
  templateUrl: './btn-delete-text.component.html',
})
export class BtnDeleteTextComponent {
  @Input() control!: FormControl;

  deleteText() {
    if (this.control) {
      this.control.setValue(''); // Limpia el campo de texto
    }
  }
}
