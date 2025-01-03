import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top',
  imports: [RouterModule],
  templateUrl: './top.component.html',
  styleUrl: './top.component.css',
})
export class TopComponent {
  @Input() nick!: string;
  @Input() tag!: string;
}
