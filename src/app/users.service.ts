import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpClient) { 
  }
  getUser(id){
    return this.http.get(`https://fakestoreapi.com/users/${id}`,{
      headers : {
        Autherization :'123456789',
      },
      params : {
        name :'mohamed'
      }
    } )
  }
}
