import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-share-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './share-button.component.html',
})
export class ShareButtonComponent {
  @Input() control!: FormControl;

  async shareText() {
    if (this.control) {
      const textToShare = this.control.value;
      navigator.clipboard.writeText(textToShare);

      try {
        await navigator.share({
          title: 'Selecciona discord y envía texto',
          text: textToShare,
        });
        // createToast.success('Texto compartido');
        console.log('Texto compartido');
      } catch (err) {
        // createToast.error('Error al compartir');
        console.error('Error al compartir:', err);
      }
    }
  }


}
