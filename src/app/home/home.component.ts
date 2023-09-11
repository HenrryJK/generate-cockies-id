import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  userId: string;
  constructor(private cookieService: CookieService) {
    this.userId = this.cookieService.get('userId');
    if (!this.userId) {
      this.userId = this.generateUniqueId();
      // Guardar la cookie
      this.cookieService.set('userId', this.userId, 365);
    }
   }

   generateUniqueId(): string {
    return Math.random().toString(36).substr(2, 9);
  }
  ngOnInit(): void {
  }
}
