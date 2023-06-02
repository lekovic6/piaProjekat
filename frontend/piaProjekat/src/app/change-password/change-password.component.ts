import { Component, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit{
  
  constructor(private clientService:ClientService, private loginService:LoginService) { }
  
  changePasswordForm: FormGroup;
  oldPassword:string;

  ngOnInit(): void {
    this.oldPassword = this.loginService.getUser().password;

    this.changePasswordForm = new FormGroup({
      'oldPassword': new FormControl(null, Validators.required),
      'newPassword': new FormControl(null, [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z][A-Za-z\\d@$!%*#?&]{6,11}$') // password pattern
      ]),
      'confirmPassword': new FormControl(null, [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z][A-Za-z\\d@$!%*#?&]{6,11}$') // password pattern
      ]),
    });
  }

  changePassword() {
    if (this.changePasswordForm.value.oldPassword !== this.oldPassword){
      alert('Old Password is incorrect');
      return;
    }
    if (this.changePasswordForm.value.newPassword !== this.changePasswordForm.value.confirmPassword) {
      alert('The new password and the confirmation password do not match!');
      return;
    }
    
    this.loginService.changePassword(this.loginService.getUser().username, this.changePasswordForm.value.newPassword).subscribe(res =>{
      if (res['message'] == 'password changed') alert('Password changed successfully');
      else alert('Changing password failed!');
    });
  }

}
