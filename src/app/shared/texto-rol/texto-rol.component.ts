import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { marked } from 'marked';
import { createToast } from '../../Utils/create-toastr';


@Component({
  selector: 'app-texto-rol',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './texto-rol.component.html',
})
export class TextoRolComponent {
  markdownForm: FormGroup;
  htmlContent: string = '';

  constructor(private fb: FormBuilder) {
    this.markdownForm = this.fb.group({
      markdownText: [''], // Campo de texto para Markdown
    });

    // Escuchamos cambios en el formulario y actualizamos la previsualización
    this.markdownForm.get('markdownText')?.valueChanges.subscribe(async (markdownText) => {
      this.htmlContent = await this.convertMarkdownToHtml(markdownText);
    });
  }

  // Función para convertir Markdown a HTML de manera asíncrona
  async convertMarkdownToHtml(markdown: string): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        // Usamos la librería `marked` para convertir el Markdown a HTML
        const html = marked(markdown);
        resolve(html);
      } catch (error) {
        reject('Error al convertir Markdown a HTML');
      }
    });
  }

  insertMarkdown(text: string) {
    const textAreaControl = this.markdownForm.get('markdownText');
    if (textAreaControl) {
      const currentText = textAreaControl.value || '';
      const updatedText = currentText + text; // Añade el texto al final
      textAreaControl.setValue(updatedText);
    }
  }

  copyToClipboard() {
    const textAreaControl = this.markdownForm.get('markdownText');
    if (textAreaControl) {
      const textToCopy = textAreaControl.value;
      navigator.clipboard.writeText(textToCopy).then(() => {
        createToast.success('Texto copiado');
      }).catch(err => {
        createToast.error('Error al copiar');
      });
    }
  }
}
