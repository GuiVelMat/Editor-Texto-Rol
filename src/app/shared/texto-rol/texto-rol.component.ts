import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { marked } from 'marked';
import { BtnTemplateTextComponent } from '../buttons/btn-template-text/btn-template-text.component';
import { BtnCopyTextComponent } from '../buttons/btn-copy-text/btn-copy-text.component';
import { BtnDeleteTextComponent } from '../buttons/btn-delete-text/btn-delete-text.component';


@Component({
  selector: 'app-texto-rol',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, BtnTemplateTextComponent, BtnCopyTextComponent, BtnDeleteTextComponent],
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

  get markdownControl(): FormControl {
    return this.markdownForm.get('markdownText') as FormControl;
  }
}
