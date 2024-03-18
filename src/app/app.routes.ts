import { Routes } from '@angular/router';
import { HomeComponent } from './UI/principal/home/home.component';
import { CreateRoomsComponent } from './UI/principal/create-rooms/create-rooms.component';
import { GameComponent } from './UI/principal/game/game.component';
import { RoomsLayoutComponent } from './UI/layouts/rooms-layout/rooms-layout.component';

export const routes: Routes = [
    { path: "**"            , redirectTo: "home", pathMatch: "full" },
    { path: "home"          , component : HomeComponent              },
    { path: "rooms"         , component : RoomsLayoutComponent       },
    { path: "create-rooms"  , component : CreateRoomsComponent       },
    { path: "game/:id"      , component : GameComponent              },
];
