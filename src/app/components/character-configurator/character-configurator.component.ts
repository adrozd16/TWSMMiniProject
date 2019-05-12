import { Component, OnInit } from '@angular/core';
import { FehService } from 'src/app/services/feh.service';
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

  constructor(fb: FormBuilder, public authService: AuthService, private fehService: FehService, private router:Router) {
    // preparing default data and validators of the form
    this.characterOptions = fb.group({
      owner: [authService.user.name],
      character: ["", Validators.required],
      level: ['', [Validators.required, Validators.min(1), Validators.max(40)]],
      merges: [1, [Validators.min(1), Validators.max(10)]]
    });
  }

  ngOnInit() {
    // fetch character list for character selecting widget
    this.fehService.getCharacterList().subscribe(list => this.characterList = list);
  }
  
  // Handles character selection by setting selected character object
  // for displaying selected character data and image
  selectCharacter(evt){
    let filtered = this.characterList.filter(chr => chr._id === evt.value);
    this.character = filtered[0];
  }

  // Handles adding my character instance to the database
  onSubmit(){
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
