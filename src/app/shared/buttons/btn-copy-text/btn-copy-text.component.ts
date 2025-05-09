import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { createToast } from '../../../Utils/create-toastr';

@Component({
  selector: 'app-btn-copy-text',
  standalone: true,
  imports: [],
  templateUrl: './btn-copy-text.component.html',
})
export class BtnCopyTextComponent {
  @Input() control!: FormControl;

  copyToClipboard() {
    if (this.control) {
      const textToCopy = this.control.value;
      navigator.clipboard.writeText(textToCopy).then(() => {
        createToast.success('Texto copiado');
      }).catch(err => {
        createToast.error('Error al copiar');
      });
    }
  }
}
