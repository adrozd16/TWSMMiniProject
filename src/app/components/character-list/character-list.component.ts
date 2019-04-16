import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FehService } from 'src/app/services/feh.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characterList = [];

  constructor(private sanitizer : DomSanitizer, private fehService: FehService) { }

  ngOnInit() {
    this.fehService.getCharacterList().subscribe(list => this.characterList = list);
  }

}
