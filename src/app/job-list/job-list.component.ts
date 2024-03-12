import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'tss-job-list',
  standalone: true,
  imports: [NgIf, NgFor, PageHeaderComponent],
  templateUrl: './job-list.component.html',
  styleUrl: './job-list.component.scss'
})
export class JobListComponent implements OnInit {
  pageTitle?: string;
  // Data for testing...
  mockData = [{id: 1, dateCreated: '05/02/2024', description: 'Job 1 description', status: 'TODO'}, {id: 2, dateCreated: '06/03/2024', description: 'Job 2 description', status: 'TODO'}];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.data['title'];
  }
}
