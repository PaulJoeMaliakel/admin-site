import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {
  item: string;
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}
  logout() {
    console.log('sadasd');
    this.authService.logout();
    this.router.navigateByUrl('/login');
  }
}
