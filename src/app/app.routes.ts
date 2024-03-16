import { Routes } from '@angular/router';
import { HomeComponent } from './UI/principal/home/home.component';
import { RoomsComponent } from './UI/principal/rooms/rooms.component';
import { CreateRoomsComponent } from './UI/principal/create-rooms/create-rooms.component';
import { GameComponent } from './UI/principal/game/game.component';

export const routes: Routes = [

    { path: "home"          , component : HomeComponent             },
    { path: "rooms"         , component : RoomsComponent            },
    { path: "create-rooms"  , component : CreateRoomsComponent      },
    { path: "game/:id"      , component : GameComponent             },
    { path: "**"              , redirectTo: "home", pathMatch: "full" },
];
