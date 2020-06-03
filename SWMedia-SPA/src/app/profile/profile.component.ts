import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { tokenGetter } from '../app.module';
import { UsersService } from '../_services/users.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: any = {};
  editMode: boolean;

  constructor(private alertify: AlertifyService, private router: Router, public authService: AuthService, private usersService: UsersService) { }

  ngOnInit() {
    this.authService.GetProfile(+this.authService.decodedToken.nameid).subscribe((response) => {
      this.user = response;
      console.log(this.user);
    }, error => {
      console.log(error)
    });
    this.editMode = false;
  }

  updateProfile(user) {
    this.authService.UpdateProfile(user).subscribe((response) => {
      this.alertify.success("Profile successfully updated");
    }, error => {
      this.alertify.error(error);
    })
  }

  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
    this.router.navigate(['']);
  }

  changeEditMode(editMode) {
    this.editMode = editMode;
  }
}
