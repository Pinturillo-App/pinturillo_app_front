import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
  public loginForm : FormGroup = new FormGroup({});
  public avatarUrl: string | undefined;
  tarjetaActivaId: string = 'tarjeta1';

  constructor(
    private _fb    : FormBuilder,
    private router : Router
  ){
    this.loginForm = this._fb.group({
      nick: ['', Validators.required],
      avatar: ['', Validators.required],
    });
    this.changeAvatar();
  }

  submitForm(): void {

    if (!this.loginForm.value['nick'].value) {
      this.loginForm.value['nick'] = 'MiNickName123';
    }
  
    const selectedAvatarUrl = this.avatarUrl ? this.avatarUrl : '../../../../assets/Avatars/Avatar_0.png';
    this.loginForm.value['avatar'] = selectedAvatarUrl;
  
    console.log(this.loginForm.value);
    this.router.navigate(['rooms']);
  }

  changeAvatar(): void {
    const randomIndex = Math.floor(Math.random() * 19);
    this.avatarUrl = `../../../../assets/Avatars/Avatar_${randomIndex}.png`;
  }

  changeTarjeta(id: string, botonId: string) {
    // Restablecer el color de todos los botones a blanco
    document.querySelectorAll('.botones button').forEach((btn: Element) => {
      (btn as HTMLElement).style.backgroundColor = '#ffffff';
    });

    // Ocultar la tarjeta activa actualmente
    const tarjetaActivaElement = document.getElementById(this.tarjetaActivaId);
    if (tarjetaActivaElement) {
      tarjetaActivaElement.style.display = 'none';
    }

    // Mostrar la tarjeta correspondiente al botón y cambiar su color
    const element = document.getElementById(id);
    if (element) {
      element.style.display = 'flex';
      const boton = document.getElementById(botonId);
      if (boton) {
        boton.style.backgroundColor = '#6e06f3';
      }

      // Actualizar el id de la tarjeta activa
      this.tarjetaActivaId = id;
    }
  }

}
