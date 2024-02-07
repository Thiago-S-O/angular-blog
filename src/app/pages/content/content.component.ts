import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { dataFake } from '../../data/datafake';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{
  photoCover: string = 'assets/image-default.png';
  contentTitle: string = 'Content tilte';
  contentDescription: string = 'Contente description';
  private id:string | null = '0';

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
    )
    this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id: string | null) {
    const result = dataFake.filter(article => article.id == id)[0];

    this.contentDescription = result.description;
    this.contentTitle = result.title;
    this.photoCover = result.photoCover;
  }
}
