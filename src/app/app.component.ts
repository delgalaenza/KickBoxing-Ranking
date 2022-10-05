import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kb-frontend';
  fighterSearched="";

  ngOnChanges(){
    
  }

  updateTableFilter(fighterSearched: string) {
    this.fighterSearched = fighterSearched;
  }

}


