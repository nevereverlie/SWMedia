import { Component, OnInit, TemplateRef } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';
import { ModalModule, BsModalRef, BsModalService} from 'ngx-bootstrap/modal'
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  model: any = {};
  registerMode = false;
  bsModalRef: BsModalRef;

  constructor(public authService: AuthService, private alertify: AlertifyService, private router: Router, private modalService: BsModalService) { }

  ngOnInit() {
  }

  openModalWithComponent() {
    this.bsModalRef = this.modalService.show(RegisterComponent);
    this.bsModalRef.content.closeBtnName = 'Close';
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in!');
    }, error => {
      this.alertify.error(error);
    });
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
    this.router.navigate(['']);
  }

  signinWithGoogle() {
    this.authService.signinWithGoogle();

    // .subscribe(response => {
    //   console.log(response);
    // });
  }

  registerToggle() {
    this.registerMode = true;
  }

  cancelRegistrationMode(registerMode: boolean) {
    this.registerMode = registerMode;
  }
}
