import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private links = JSON.parse(localStorage.getItem('links') || '[]');

  getLinks() {
    return this.links;
  }

  addLink(link: any) {
    this.links.push(link);
    localStorage.setItem('links', JSON.stringify(this.links));
  }
}
