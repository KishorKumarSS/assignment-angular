import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  steps = ['Borrower Info', 'Director Info', 'Financial Info', 'Past Performance', 'Document Upload'];
}
