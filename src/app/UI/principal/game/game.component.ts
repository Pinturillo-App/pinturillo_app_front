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
    avatar: '../../../../assets/Avatars/Avatar_1.png'
  },
  {
    id    : 2,
    nick  : 'Sebastian098',
    avatar: '../../../../assets/Avatars/Avatar_2.png'
  },
  {
    id    : 3,
    nick  : 'JuanP',
    avatar: '../../../../assets/Avatars/Avatar_3.png'
  },
  {
    id    : 4,
    nick  : 'ABarona',
    avatar: '../../../../assets/Avatars/Avatar_4.png'
  },
  {
    id    : 5,
    nick  : 'CamilinMilo',
    avatar: '../../../../assets/Avatars/Avatar_5.png'
  },
  {
    id    : 6,
    nick  : 'Crotolam',
    avatar: '../../../../assets/Avatars/Avatar_6.png'
  },
  {
    id    : 7,
    nick  : 'Pepe123',
    avatar: '../../../../assets/Avatars/Avatar_7.png'
  },
  {
    id    : 8,
    nick  : 'JorgeCerdoxX',
    avatar: '../../../../assets/Avatars/Avatar_8.png'
  },
  {
    id    : 9,
    nick  : 'ElTumbaPisos',
    avatar: '../../../../assets/Avatars/Avatar_9.png'
  },
  {
    id    : 10,
    nick  : 'Villota',
    avatar: '../../../../assets/Avatars/Avatar_10.png'
  },
  {
    id    : 11,
    nick  : 'RomanHabla',
    avatar: '../../../../assets/Avatars/Avatar_11.png'
  },
  {
    id    : 12,
    nick  : 'PedroPablo',
    avatar: '../../../../assets/Avatars/Avatar_12.png'
  },
  {
    id    : 13,
    nick  : 'Josue  ',
    avatar: '../../../../assets/Avatars/Avatar_13.png'
  },
]


@Component({
  selector: 'app-game',
  standalone: true,
  imports: [ GameBoardComponent, GameChatComponent, GameUsersComponent ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

  constructor(private gameServ:GameDataService ){}

  ngOnInit(): void {
    
    this.gameServ.setDataUsers( users_game );
  }
}
