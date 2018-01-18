import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  rForm: FormGroup;
  addPost(post) {
    console.log(post);
  }
  ngOnInit() {
    this.rForm = new FormGroup({
      name: new FormControl( null, [ Validators.required, Validators.minLength(3), Validators.pattern(/^[a-zA-Z]+$/)]),
      email: new FormControl(null, [Validators.required, Validators.email, Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]),
      description: new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }
}
