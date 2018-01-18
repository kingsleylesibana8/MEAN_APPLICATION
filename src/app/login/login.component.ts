import { Component, OnInit, ViewContainerRef } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDetailsService} from '../shared/services/user-details.service';
import { Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rForm: FormGroup;
  userInfo: any;
  constructor(private userService: UserDetailsService, private router: Router, private cookieService: CookieService,public toastr: ToastsManager, vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
   }
  getUser(post) {
    const userObj = {
      username : post.username,
      password : post.password
    }
    this.userService.signin(userObj).subscribe(data => {
      this.userInfo = data;
      if (this.userInfo.username) {
        this.cookieService.set( 'username', this.userInfo.username );
        this.router.navigate(['/home']);
      } else {
        this.toastr.error('Invalid User Credentials!', 'Oops!');
          this.router.navigate(['/login']);
        }
    });
  }

  addPost(post) {
    console.log(post);
  }

  ngOnInit() {
    this.rForm = new FormGroup({
      username: new FormControl( null, [ Validators.required, Validators.minLength(3)]),
      password: new FormControl(null, [Validators.required]),
    });
  }

}
