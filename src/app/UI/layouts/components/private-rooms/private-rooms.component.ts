import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-private-rooms',
  standalone: true,
  imports: [],
  templateUrl: './private-rooms.component.html',
  styleUrl: './private-rooms.component.css'
})
export class PrivateRoomsComponent implements OnInit{
  public avatarUrl: string = ``;

  constructor() {}


  ngOnInit(): void {
    this.avatarUrl = sessionStorage.getItem('avatar') || '';
  }

}
