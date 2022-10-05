import { Component, Input, OnInit, ViewChild } from '@angular/core';
import {AthleteService} from "../service/athlete.service";
import {Athlete} from "../model/Athlete";
import {HttpErrorResponse} from "@angular/common/http";
import { map, Observable } from 'rxjs';
import {MatPaginator} from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';




@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrls: ['./athlete-list.component.css']
})
export class AthleteListComponent implements OnInit {
  athleteListSubscription: any;
  athletesList: Athlete[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  displayedColumns: string[] = ['ranking', 'first_name', 'nickname', 'age', 'nationality', 'organization', 'points'];
  dataSource!: MatTableDataSource<Athlete>;
 
  @Input() fighterSearched= "";
  
  constructor(private athleteService: AthleteService) { }

  ngOnInit(): void {
    if(screen.width<739){
      this.displayedColumns = ['ranking', 'first_name', 'age', 'points'];
    }
    this.showAthletes();
  }

  ngOnDestroy() {
    this.athleteListSubscription.unsubscribe()
 }

 ngOnChanges(){
  this.dataSource.filter = this.fighterSearched
  console.log(this.fighterSearched);
}

 
  public showAthletes(): void {
    this.athleteListSubscription = this.athleteService.getAllAthletes().pipe(
      map(results => results.sort(sortByRanking))
    ).subscribe(list => {
      this.athletesList = list; 
      this.athletesList[0].ranking = "🏆";
      this.athletesList[1].ranking = "🥈";
      this.athletesList[2].ranking = "🥉";

      this.dataSource = new MatTableDataSource<Athlete>(this.athletesList);
      this.dataSource.paginator = this.paginator;
    });
   
  }


}


function sortByRanking(a:Athlete,b:Athlete){
  return (a.ranking - b.ranking);
}