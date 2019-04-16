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
    // docelowo tutaj powinno być wywołąnie usługi na serwerze
    if(username != ""){
      this.user = {
        name: username
      };
    }
  }

  logout(){
    this.user = null;
  }

}
