import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrl: './big-card.component.css'
})
export class BigCardComponent {

  @Input()
  photoCover: string = '';
  @Input()
  cardTitle: string ='There is no title here!';
  @Input()
  cardDescription: string = 'There is no description here!';
  @Input()
  Id:string = '0';

  constructor() {

  }
  // ngOnInit(): void { }
}
