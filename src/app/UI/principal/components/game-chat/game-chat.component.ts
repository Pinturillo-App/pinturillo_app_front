import { Component, ElementRef, ViewChild } from '@angular/core';
import { GameDataService } from '../../services/game-data.service';
import { User } from '../../../../domain/model/users/user';
import { Answer } from '../../../../domain/model/answers/answer';
import { CommonModule } from '@angular/common';

const chat_messages: Answer[] = [
  {
    name_user: 'Jurgen212',
    data: 'Pepinillo'
  },
  {
    name_user: 'PedroPablo',
    data: 'Pepinillo'
  },
  {
    name_user: 'ElTumbaPisos',
    data: 'Pepinillo'
  },
  {
    name_user: 'Jurgen212',
    data: 'Pepinillo'
  },
  {
    name_user: 'Jurgen212',
    data: 'Pepinillo'
  },
  {
    name_user: 'PedroPablo',
    data: 'Pepinillo'
  },
  {
    name_user: 'Jurgen212',
    data: 'Pepinillo'
  },
  {
    name_user: 'ElTumbaPisos',
    data: 'Pepinillo'
  },
  {
    name_user: 'ElTumbaPisos',
    data: 'Pepinillo'
  }
]

@Component({
  selector: 'app-game-chat',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game-chat.component.html',
  styleUrl: './game-chat.component.css'
})
export class GameChatComponent {

  @ViewChild('answers') answersContainer!: ElementRef;

  public messages: Answer[] = chat_messages;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.scrollToBottom(); 
  }

  scrollToBottom(): void {
    if (this.answersContainer) {
      this.answersContainer.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'end', inline: 'nearest' });
    }
  }

}
