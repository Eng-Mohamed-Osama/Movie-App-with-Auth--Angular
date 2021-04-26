import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
    
  }
  Logout(){
    localStorage.removeItem('login')
    this.router.navigate([''])
  }
}
