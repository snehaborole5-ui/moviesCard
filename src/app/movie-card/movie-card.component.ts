import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../model/movies.model';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {
  @Input() movieObj!: Imovies; // 'movieObj' मधील O कॅपिटल आहे का तपासा

  constructor() { }

  ngOnInit(): void { }
}