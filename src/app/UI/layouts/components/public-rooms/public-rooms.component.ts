import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-public-rooms',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './public-rooms.component.html',
  styleUrl: './public-rooms.component.css'
})
export class PublicRoomsComponent {
  rooms = [
    { name: 'Minecraft', img: '../../../../../assets/svg/room_mc.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Minecraft', img: '../../../../../assets/svg/room_mc.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Minecraft', img: '../../../../../assets/svg/room_mc.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Minecraft', img: '../../../../../assets/svg/room_mc.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Minecraft', img: '../../../../../assets/svg/room_mc.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Minecraft', img: '../../../../../assets/svg/room_mc.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Minecraft', img: '../../../../../assets/svg/room_mc.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
    { name: 'Minecraft', img: '../../../../../assets/svg/room_mc.svg', code: '3WY', users: '6/6', language: 'SPA', trophies: '13/70' },
  ]

  selectedRoom(event: { target: any; }) {
    const previouslySelected = document.querySelector('.selected');
    if (previouslySelected) previouslySelected.classList.remove('selected');

    const roomElement = event.target;
    if (roomElement.classList.contains('room')) roomElement.classList.add('selected');
  }
}
