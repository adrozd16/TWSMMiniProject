import { Component, OnInit } from '@angular/core';
import { FehService } from 'src/app/services/feh.service';
import { DomSanitizer } from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-character-configurator',
  templateUrl: './character-configurator.component.html',
  styleUrls: ['./character-configurator.component.css']
})




export class CharacterConfiguratorComponent implements OnInit {

  characterOptions: FormGroup;

  characterList: Array<any>;
  character = null;

  constructor(fb: FormBuilder, private sanitizer:DomSanitizer, public authService: AuthService, private fehService: FehService, private router:Router) {
    this.characterOptions = fb.group({
      owner: [authService.user.name],
      character: ["", Validators.required],
      level: ['', [Validators.required, Validators.min(1), Validators.max(40)]],
      merges: [1, [Validators.min(1), Validators.max(10)]],
      // test: ""
    });
  }

  ngOnInit() {
    this.fehService.getCharacterList().subscribe(list => this.characterList = list);
  }
  
  selectCharacter(evt){
    console.log("selectCharacter", evt);
    let filtered = this.characterList.filter(chr => chr._id === evt.value);
    this.character = filtered[0];
    //this.fehService.getCharacter(evt.value).subscribe(chr => this.character = chr);
  }

  formatLabel(value){
    return value + ".";
  }

  onSubmit(evt){
    //console.log(evt);
    //console.log(this.characterOptions.value);
    if(this.characterOptions.valid){
      this.fehService.saveCharacter(this.characterOptions.value).subscribe(
        response => {
          console.log(response)
          this.router.navigateByUrl("mycharacters");
        },
        err => console.log(err)
      );
    }
  }
}
