import { Component, OnInit } from '@angular/core';
import { CharactersInfoComponent } from '../characters-info/characters-info.component';
import { Character } from '../model/character';
import { ApiService } from '../service/api.service';



@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrls: ['./characters-list.component.css'],
})

export class CharactersListComponent implements OnInit {
  characters: Character[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.getListCharacters();
  }

  getListCharacters() {
    this.apiService.getCharacters().subscribe((characters: Character[]) => this.characters = characters);
  }
}
