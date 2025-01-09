import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-anchor-link',
  standalone: true,
  templateUrl: './anchor-link.component.html',
  styleUrls: ['./anchor-link.component.scss'],
})
export class AnchorLinkComponent {
  @Input() text: string = '';
  @Input() href: string = '#';
  @Input() target: string = '_blank';
  @Input() rel: string = 'noopener noreferrer';
}
