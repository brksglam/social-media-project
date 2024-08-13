import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-link-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  name: string = '';
  url: string = '';
  description: string = '';

  @Output() linkAdded = new EventEmitter<any>();

  onSubmit() {
    if (this.name && this.url && this.description) {
      this.linkAdded.emit({ name: this.name, url: this.url, description: this.description });
      this.name = '';
      this.url = '';
      this.description = '';
    }
  }
}
