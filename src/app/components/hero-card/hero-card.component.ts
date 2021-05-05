import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HeroService } from "../../service/hero.service";
import { Hero } from "../../model/hero.model";

@Component({
  selector: 'app-hero-card',
  templateUrl: './hero-card.component.html',
  styleUrls: ['./hero-card.component.scss']
})
export class HeroCardComponent implements OnInit {

  heroes: Observable<Hero[]>;

  constructor(private heroService: HeroService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.heroes = this.heroService.getHeroes();
  }
}
