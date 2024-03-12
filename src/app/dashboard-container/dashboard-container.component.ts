import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from '../shared/page-header/page-header.component';

@Component({
  selector: 'tss-dashboard-container',
  standalone: true,
  imports: [RouterOutlet, RouterLinkWithHref, RouterLinkActive, RouterLink, PageHeaderComponent],
  templateUrl: './dashboard-container.component.html',
  styleUrl: './dashboard-container.component.scss'
})
export class DashboardContainerComponent {

}
