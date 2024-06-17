import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Two Way Data Binding</h1>

    <input [(ngModel)]="parentData" placeholder="Enter some text" />
    <p>Parent Data: {{ parentData }}</p>

    <app-test [(childData)]="parentData"></app-test>`,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'TwowayBinding';
  parentData: string = 'Initial parent data';
}
