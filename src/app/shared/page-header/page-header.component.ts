import { Component, Input } from '@angular/core';

@Component({
  selector: 'tss-page-header',
  standalone: true,
  imports: [],
  templateUrl: './page-header.component.html',
  styleUrl: './page-header.component.scss'
})
export class PageHeaderComponent {
  @Input() pageTitle?: string;
}
