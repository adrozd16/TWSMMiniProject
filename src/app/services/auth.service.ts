import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  
  user: {
    name: string
  } = null;


  constructor() { }


  login(username, password){
    // It's only a mock-up. In the real application, the real authentication service will be called here
    // and the user object is set after proper login
    if(username != ""){
      this.user = {
        name: username
      };
    }
  }

  // if the <user> object is null, then whole application knows that no user is logged in
  logout(){
    this.user = null;
  }

}
