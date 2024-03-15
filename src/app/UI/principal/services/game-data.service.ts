import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../../../domain/model/users/user';
import { Answer } from '../../../domain/model/answers/answer';

@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  constructor() { }

  private dataUsers = new BehaviorSubject<User[]    | null>( null );
  private answers   = new BehaviorSubject<Answer[]  | null>( null );


  public getDataUsers(): Observable<User[] | null> {
    return this.dataUsers.asObservable();
  }

  public setDataUsers(data: User[]): void {
    this.dataUsers.next(data);
  }

  public getAnswers(): Observable<Answer[] | null> {
    return this.answers.asObservable();
  }

  public setAnswers(data: Answer[]): void {
    this.answers.next(data);
  }
}
