import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  content = '待辦事項 A'

  hasFinished = false;

  onsetStatus(hasFinished: boolean):void {
    this.hasFinished = hasFinished;
  }
}
