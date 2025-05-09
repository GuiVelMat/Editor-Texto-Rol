import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { marked } from 'marked';
import { BtnTemplateTextComponent } from '../buttons/btn-template-text/btn-template-text.component';
import { BtnCopyTextComponent } from '../buttons/btn-copy-text/btn-copy-text.component';
import { BtnDeleteTextComponent } from '../buttons/btn-delete-text/btn-delete-text.component';
import { distinctUntilChanged } from 'rxjs';


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
      markdownText: [''],
    });

    this.markdownForm.get('markdownText')?.valueChanges.pipe(distinctUntilChanged()).subscribe(async (markdownText) => {
      this.htmlContent = await this.convertMarkdownToHtml(markdownText);
    });
  }

  async convertMarkdownToHtml(markdown: string) {
    try {
      return await marked(markdown);
    } catch {
      return 'Error al convertir Markdown a HTML';
    }
  }

  get markdownControl(): FormControl {
    return this.markdownForm.get('markdownText') as FormControl;
  }
}
