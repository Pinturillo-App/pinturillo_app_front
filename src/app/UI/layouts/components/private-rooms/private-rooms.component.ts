import { Component } from '@angular/core';

@Component({
  selector: 'app-private-rooms',
  standalone: true,
  imports: [],
  templateUrl: './private-rooms.component.html',
  styleUrl: './private-rooms.component.css'
})
export class PrivateRoomsComponent {
  public avatarUrl: string = `../../../../../assets/Avatars/Avatar_0.png`;

  changeAvatar(): void {
    const randomIndex = Math.floor(Math.random() * 26);

    this.avatarUrl = `../../../../assets/Avatars/Avatar_${randomIndex}.png`;
  }
}
