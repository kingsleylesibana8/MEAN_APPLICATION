import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserDetailsService} from '../shared/services/user-details.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
  rForm: FormGroup;
  constructor(private userService: UserDetailsService) { }

  addPost(post) {
    this.userService.createUser(post).subscribe(data => {
      console.log('User Created');
    });
    console.log(post);
  }

  ngOnInit() {
    this.rForm = new FormGroup({
      username: new FormControl( null, [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]),
      lastname: new FormControl( null, [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      password: new FormControl(null, [Validators.required]),
    });
  }
  }


