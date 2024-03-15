import { Component } from '@angular/core';
import { GameBoardComponent } from '../components/game-board/game-board.component';
import { GameChatComponent } from '../components/game-chat/game-chat.component';
import { GameUsersComponent } from '../components/game-users/game-users.component';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [ GameBoardComponent, GameChatComponent, GameUsersComponent ],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css'
})
export class GameComponent {

}
