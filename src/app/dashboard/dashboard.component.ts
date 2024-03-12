import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'tss-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive, RouterLink, PageHeaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {
  pageTitle?: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pageTitle = this.route.snapshot.data['title'];
  }
}
