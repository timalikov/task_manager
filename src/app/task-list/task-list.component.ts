import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { Task } from '../task';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, RouterLink, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks: Task[] = JSON.parse(localStorage.getItem('tasks')!);

  removeTask(id: number) {
    let taskIndex = this.tasks.findIndex(task => task.id === id);

    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }

    localStorage.setItem('tasks', JSON.stringify(this.tasks));

  }

  trackById(index: number, task: Task): number {
    return task.id;
  }
}
