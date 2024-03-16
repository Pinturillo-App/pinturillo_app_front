import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

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

  constructor(
    private _fb : FormBuilder 
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
  }

  changeAvatar(): void {
    const randomIndex = Math.floor(Math.random() * 19);
    this.avatarUrl = `../../../../assets/Avatars/Avatar_${randomIndex}.png`;
  }

}
