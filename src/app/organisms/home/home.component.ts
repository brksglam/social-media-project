import { Component } from '@angular/core';
import { LinkService } from '../../services/link.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  links = this.linkService.getLinks();

  constructor(private linkService: LinkService) {}
}
