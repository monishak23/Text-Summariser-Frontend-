import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TextSummariserService } from './text-summariser.service';

@Component({
  selector: 'app-text-summariser',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './text-summariser.html',
  styleUrl: './text-summariser.css',
})
export class TextSummariser {
  textToSummarise = new FormControl('');
  summaryResult = signal<string>('');

  constructor(private textSummariserService: TextSummariserService) {}

  ngOnInit() {
  }

  summariseText(): void {
    this.textSummariserService.summariseText(this.textToSummarise.value || '').subscribe({
      next: (response) => {
        this.summaryResult.set(response);
      },
      error: (error) => {
        console.error('Error summarising text:', error);
      }
    });
  }
}
