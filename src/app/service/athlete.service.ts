import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Athlete} from "../model/Athlete";
import {map, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AthleteService {
  private athleteApiAll = environment.athleteApi + "all";

  constructor(private http: HttpClient) { }

  public getAllAthletes(): Observable<Athlete[]> {
    const headers = { 'content-type': 'application/json'}
    return this.http.get<Athlete[]>(`${this.athleteApiAll}`,{'headers':headers})
  }
}


