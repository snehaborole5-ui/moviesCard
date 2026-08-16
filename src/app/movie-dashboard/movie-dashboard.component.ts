import { Component, OnInit } from '@angular/core';
import { movieArray } from '../const/movies';
import { Imovies } from '../model/movies.model';

@Component({
  selector: 'app-movie-dashboard',
  templateUrl: './movie-dashboard.component.html',
  styleUrls: ['./movie-dashboard.component.css']
})
export class MovieDashboardComponent implements OnInit {
  moviesArr: Array<Imovies> = [];

  constructor() { }

  ngOnInit(): void {
    this.moviesArr = movieArray;
    console.log('डेटा आला का:', this.moviesArr); // <--- ही ओळ टाका
  }
}