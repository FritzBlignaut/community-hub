import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'tss-job-list',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent {
  mockData = [{id: 1, dateCreated: '05/02/2024', description: 'Job 1 description', status: 'TODO'}, {id: 2, dateCreated: '06/03/2024', description: 'Job 2 description', status: 'TODO'}];

}
