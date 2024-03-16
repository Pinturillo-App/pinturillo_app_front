
import { Component, Inject } from '@angular/core';
import { GameBoardComponent } from '../components/game-board/game-board.component';
import { GameChatComponent } from '../components/game-chat/game-chat.component';
import { GameUsersComponent } from '../components/game-users/game-users.component';
import { User } from '../../../domain/model/users/user';
import { GameDataService } from '../services/game-data.service';


const users_game: User[] = [
  {
    id    : 1,
    nick  : 'Jurgen212',
    avatar: '../../../../assets/Avatars/Avatar_1.png',
    points: 60
  },
  {
    id    : 2,
    nick  : 'Sebastian098',
    avatar: '../../../../assets/Avatars/Avatar_2.png',
    points: 80
  },
  {
    id    : 3,
    nick  : 'JuanP',
    avatar: '../../../../assets/Avatars/Avatar_3.png',
    points: 10
  },
  {
    id    : 4,
    nick  : 'ABarona',
    avatar: '../../../../assets/Avatars/Avatar_4.png',
    points: 90
  },
  {
    id    : 5,
    nick  : 'CamilinMilo',
    avatar: '../../../../assets/Avatars/Avatar_5.png',
    points: 80
  },
  {
    id    : 6,
    nick  : 'Crotolam',
    avatar: '../../../../assets/Avatars/Avatar_6.png',
    points: 70
  },
  {
    id    : 7,
    nick  : 'Pepe123',
    avatar: '../../../../assets/Avatars/Avatar_7.png',
    points: 60
  },
  {
    id    : 8,
    nick  : 'JorgeCerdoxX',
    avatar: '../../../../assets/Avatars/Avatar_8.png',
    points: 50
  },
  {
    id    : 9,
    nick  : 'ElTumbaPisos',
    avatar: '../../../../assets/Avatars/Avatar_9.png',
    points: 40
  },
  {
    id    : 10,
    nick  : 'Villota',
    avatar: '../../../../assets/Avatars/Avatar_10.png',
    points: 30
  },
  {
    id    : 11,
    nick  : 'RomanHabla',
    avatar: '../../../../assets/Avatars/Avatar_11.png',
    points: 20
  },
  {
    id    : 12,
    nick  : 'PedroPablo',
    avatar: '../../../../assets/Avatars/Avatar_12.png',
    points: 10
  },
  {
    id    : 13,
    nick  : 'Josue  ',
    avatar: '../../../../assets/Avatars/Avatar_13.png',
    points: 90
  },
]



@Component({
  selector: 'app-game',
  standalone: true,
  imports: [GameBoardComponent, GameUsersComponent, GameChatComponent ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  constructor(private gameServ:GameDataService ){}

  ngOnInit(): void {
    
    this.gameServ.setDataUsers( users_game );
  }
}
