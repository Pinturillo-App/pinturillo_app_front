import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
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

  @ViewChild('answers', { static: true }) answersContainer!: ElementRef;


  public messages: Answer[] = chat_messages;


  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() { 
    // Haz que se desplace hacia abajo automáticamente
    const scrollDiv = this.answersContainer.nativeElement;
    this.renderer.setProperty(scrollDiv, 'scrollTop', scrollDiv.scrollHeight);
  }

}
