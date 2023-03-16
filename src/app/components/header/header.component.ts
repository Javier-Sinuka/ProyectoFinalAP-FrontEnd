import { Component } from '@angular/core';
import {ApiService} from "../../api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private apiService: ApiService,
              private router: Router) {
  }

  ngOnInit(): void{
  }

  onLogout():void{
    this.apiService.logout();
    this.router.navigate(['/home']);
    window.location.reload();
  }

  verifyLoggedInHeader():boolean{
    return this.apiService.verifyLogged();
  }
}
