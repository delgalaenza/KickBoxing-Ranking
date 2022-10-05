import { Component, OnInit, Output,  EventEmitter, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {
  }

  @Output() fighterSearched = new EventEmitter<string>();
  fighterSearchedString=""

  addNewItem(value: string) {
    this.fighterSearched.emit(value);
  }
 
  inputChanged(){
    this.addNewItem(this.fighterSearchedString);
  }


}
