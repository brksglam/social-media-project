import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LinkResolver implements Resolve<any> {

  resolve() {
    return JSON.parse(localStorage.getItem('links') || '[]');
  }
}
