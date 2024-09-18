import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { StorageService } from '../../_services/storage.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  // form: any = {
  //   username: null,
  //   password: null
  // };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  //@Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  constructor(private authService: AuthService, private storageService: StorageService) { }

  ngOnInit(): void {
    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }
  }

  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
      // this.authService.login(this.form.username , this.form.).subscribe({
      //   next: data => {
      //     this.storageService.saveUser(data);  
      //     this.isLoginFailed = false;
      //     this.isLoggedIn = true;
      //     this.roles = this.storageService.getUser().roles;
      //     this.reloadPage();
      //   },
      //   error: err => {
      //     this.errorMessage = err.error.message;
      //     this.isLoginFailed = true;
      //   }
      // });
    }
  }  

  reloadPage(): void {
    window.location.reload();
  }
}
