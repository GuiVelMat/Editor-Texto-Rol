import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-btn-template-text',
  standalone: true,
  imports: [],
  templateUrl: './btn-template-text.component.html',
})
export class BtnTemplateTextComponent {
  @Input() control!: FormControl;

  insertText(text: string) {
    if (this.control) {
      const currentText = this.control.value || '';
      const updatedText = currentText + text;
      this.control.setValue(updatedText);
    }
  }
}
