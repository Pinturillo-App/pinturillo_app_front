import { Component } from '@angular/core';
import { GameDataService } from '../../services/game-data.service';
import { User } from '../../../../domain/model/users/user';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-game-users',
  standalone: true,
  imports: [ CommonModule ],
  templateUrl: './game-users.component.html',
  styleUrl: './game-users.component.css'
})
export class GameUsersComponent {
  public  users: User[] = [];

  constructor( private gameServ: GameDataService ){}

  ngOnInit(): void {
    this.callUsers();
  }


  callUsers(){

    this.gameServ.getDataUsers().subscribe( (data: any) => {
      this.users = data;
      console.log( this.users )
    })
  }


  setPoints(): number {
    return Math.floor(Math.random() * 11) * 10;
  }
}
