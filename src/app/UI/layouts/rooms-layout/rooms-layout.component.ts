import { Component } from '@angular/core';
import { RoomsComponent } from '../../principal/rooms/rooms.component';

@Component({
  selector: 'app-rooms-layout',
  standalone: true,
  imports: [
    RoomsComponent
  ],
  templateUrl: './rooms-layout.component.html',
  styleUrl: './rooms-layout.component.css'
})
export class RoomsLayoutComponent {

}
