import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelRegistration = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertify: AlertifyService, public bsModalRef: BsModalRef) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertify.success('Registration successful!');
      this.bsModalRef.hide();
    }, error => {
      this.alertify.error(error);
    });
  }

  cancel() {
    this.cancelRegistration.emit(false);
  }
}
