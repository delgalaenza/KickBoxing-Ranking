import { Component, OnInit,  Input } from '@angular/core';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  @Input() fighterSearched = "";

}
