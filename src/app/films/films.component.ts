import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  constructor() { }
  movielist : string[] = ["Le rachat de Schawshark", "Apocalypse Now", "Notorious", "Le parrain"];
  showmovies:boolean = true;

  ngOnInit() {
  }

}
