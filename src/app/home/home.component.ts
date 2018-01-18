import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cookieValue:string;
  constructor(private router: Router,private cookieService: CookieService) { }

  ngOnInit() {
    this.cookieValue = this.cookieService.get('username');
    if(!this.cookieValue){
      this.router.navigate(['/login']);
    }
    console.log(this.cookieValue);
  }

}
