import { UsersService } from './../users.service';
import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../shared-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  navbarLogo:any;
  userlist:Array<any>;

  constructor(private logo:SharedDataService) {
   this.logo.projectName.subscribe(data => this.navbarLogo = data);
   }

  ngOnInit(): void {
    this.UsersService.getUser(1).subscribe((data)=>{this.userlist = data})
  }

}
