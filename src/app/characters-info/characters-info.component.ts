import { Component, Inject, OnInit } from '@angular/core';
import { Character } from '../model/character';

@Component({
  selector: 'app-characters-info',
  templateUrl: './characters-info.component.html',
  styleUrls: ['./characters-info.component.css']
})
export class CharactersInfoComponent implements OnInit {
  characters: Character[] = [];

  constructor() { }

  ngOnInit() { }


}
