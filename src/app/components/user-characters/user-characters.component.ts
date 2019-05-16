import { Component, OnInit } from '@angular/core';
import { FehService } from 'src/app/services/feh.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-characters',
  templateUrl: './user-characters.component.html',
  styleUrls: ['./user-characters.component.css']
})
export class UserCharactersComponent implements OnInit {

  dataSource = [];
  constructor(public authService: AuthService, private fehService: FehService) { }

  ngOnInit() {
    this.refresh();
  }
  
  refresh(){
    this.fehService.getCharacterList().subscribe(list => {
      this.fehService.getUserCharacterList(this.authService.user.name).subscribe(ulist => {
        this.dataSource = ulist.map(item => {
          let filtered = list.filter(chr => chr._id === item.character);
          if(filtered.length > 0){
            item.character = filtered[0].name;
          }
          else{
            item.character = "Unknown"
          }
          return item;
        })
        
      });
    })
  }
}
